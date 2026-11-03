"""Edison Dashboard - a Thomas-Edison styled smart home panel."""
from __future__ import annotations

from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import (CONF_CONFIG, CONF_KIOSK, CONF_SIDEBAR, CONF_SUBTITLE,
                    CONF_TITLE, DEFAULT_SUBTITLE, DEFAULT_TITLE, DOMAIN,
                    JS_FILE, PANEL_URL, STATIC_URL, VERSION)


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Register static files and the sidebar panel."""
    data = hass.data.setdefault(DOMAIN, {})
    if not data.get("static"):
        await hass.http.async_register_static_paths(
            [StaticPathConfig(STATIC_URL, str(Path(__file__).parent / "frontend"), False)]
        )
        data["static"] = True
    await _register(hass, entry)
    entry.async_on_unload(entry.add_update_listener(_reload))
    return True


async def _register(hass: HomeAssistant, entry: ConfigEntry) -> None:
    opts = {**entry.data, **entry.options}
    title = opts.get(CONF_TITLE, DEFAULT_TITLE)
    cfg = {
        "title": title,
        "subtitle": opts.get(CONF_SUBTITLE, DEFAULT_SUBTITLE),
        "kiosk": bool(opts.get(CONF_KIOSK, False)),
        "config": opts.get(CONF_CONFIG, {}) or {},
    }
    await panel_custom.async_register_panel(
        hass,
        webcomponent_name="edison-dashboard",
        frontend_url_path=PANEL_URL,
        module_url=f"{STATIC_URL}/{JS_FILE}?v={VERSION}",
        sidebar_title=title if opts.get(CONF_SIDEBAR, True) else None,
        sidebar_icon="mdi:lightbulb-on-outline" if opts.get(CONF_SIDEBAR, True) else None,
        require_admin=False,
        config=cfg,
        embed_iframe=False,
    )


async def _reload(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    frontend.async_remove_panel(hass, PANEL_URL)
    return True
