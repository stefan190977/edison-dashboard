"""Config flow with setup wizard."""
from __future__ import annotations

import json
from typing import Any

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import selector as sel

from . import const as c


def _ent(domain, multiple=False):
    return sel.EntitySelector(sel.EntitySelectorConfig(domain=domain, multiple=multiple))


def _schema(d: dict[str, Any]) -> vol.Schema:
    cfg = d.get(c.CONF_CONFIG, {})
    def df(k, default=None):
        v = cfg.get(k, default)
        return {"suggested_value": v} if v not in (None, [], "") else {}
    return vol.Schema({
        vol.Required(c.CONF_TITLE, default=d.get(c.CONF_TITLE, c.DEFAULT_TITLE)): str,
        vol.Required(c.CONF_SUBTITLE, default=d.get(c.CONF_SUBTITLE, c.DEFAULT_SUBTITLE)): str,
        vol.Required(c.CONF_SIDEBAR, default=d.get(c.CONF_SIDEBAR, True)): bool,
        vol.Required(c.CONF_KIOSK, default=d.get(c.CONF_KIOSK, False)): bool,
        vol.Optional(c.CONF_WEATHER, description=df(c.CONF_WEATHER)): _ent("weather"),
        vol.Optional(c.CONF_SOLAR, description=df(c.CONF_SOLAR)): _ent("sensor"),
        vol.Optional(c.CONF_GRID, description=df(c.CONF_GRID)): _ent("sensor"),
        vol.Optional(c.CONF_BOILER, description=df(c.CONF_BOILER)): _ent("sensor"),
        vol.Optional(c.CONF_FLOW, description=df(c.CONF_FLOW)): _ent("sensor"),
        vol.Optional(c.CONF_ALARM, description=df(c.CONF_ALARM)): _ent("alarm_control_panel"),
        vol.Optional(c.CONF_WASTE, description=df(c.CONF_WASTE)): _ent("sensor"),
        vol.Optional(c.CONF_LIGHTS, description=df(c.CONF_LIGHTS)): _ent(["light", "switch"], True),
        vol.Optional(c.CONF_CLIMATES, description=df(c.CONF_CLIMATES)): _ent("climate", True),
        vol.Optional(c.CONF_CAMERAS, description=df(c.CONF_CAMERAS)): _ent("camera", True),
        vol.Optional(c.CONF_BATTERIES, description=df(c.CONF_BATTERIES)): _ent("sensor", True),
        vol.Optional(c.CONF_STATUS, description=df(c.CONF_STATUS)): _ent("binary_sensor", True),
        vol.Optional(c.CONF_BOOST, description=df(c.CONF_BOOST)): _ent("script"),
    })


_KEYS = [c.CONF_WEATHER, c.CONF_SOLAR, c.CONF_GRID, c.CONF_BOILER, c.CONF_FLOW, c.CONF_ALARM,
         c.CONF_WASTE, c.CONF_LIGHTS, c.CONF_CLIMATES, c.CONF_CAMERAS, c.CONF_BATTERIES,
         c.CONF_STATUS, c.CONF_BOOST]


def _split(user: dict[str, Any]) -> dict[str, Any]:
    out = {k: user[k] for k in (c.CONF_TITLE, c.CONF_SUBTITLE, c.CONF_SIDEBAR, c.CONF_KIOSK)}
    out[c.CONF_CONFIG] = {k: user[k] for k in _KEYS if user.get(k)}
    return out


class EdisonConfigFlow(config_entries.ConfigFlow, domain=c.DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        if user_input is not None:
            return self.async_create_entry(title=user_input[c.CONF_TITLE], data=_split(user_input))
        return self.async_show_form(step_id="user", data_schema=_schema({}))

    @staticmethod
    @callback
    def async_get_options_flow(entry):
        return EdisonOptionsFlow(entry)


class EdisonOptionsFlow(config_entries.OptionsFlow):
    def __init__(self, entry) -> None:
        self._entry = entry

    async def async_step_init(self, user_input=None):
        cur = {**self._entry.data, **self._entry.options}
        if user_input is not None:
            return self.async_create_entry(title="", data=_split(user_input))
        return self.async_show_form(step_id="init", data_schema=_schema(cur))
