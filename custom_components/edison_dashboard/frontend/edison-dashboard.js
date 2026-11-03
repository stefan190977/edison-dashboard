/* Edison Dashboard - Thomas-Edison styled smart home panel for Home Assistant */
const CSS = `
:host{display:block;position:relative;height:100%;overflow:hidden;background:#140d07;color:#e9d3a2;
 font-family:"Georgia","Times New Roman",serif;touch-action:pan-x pan-y;-webkit-user-select:none;user-select:none}
:host(.kiosk){position:fixed;inset:0;z-index:9999}
*{box-sizing:border-box;touch-action:pan-x pan-y}
.root{position:absolute;left:0;top:0;transform-origin:0 0;width:1400px;padding:14px 18px;
 background:radial-gradient(ellipse at 50% 30%,#3a2713 0%,#1c1209 60%,#0e0804 100%)}
.hd{display:flex;align-items:center;gap:14px;border:2px solid #b8893f;border-radius:6px;padding:8px 14px;
 background:linear-gradient(#2c1d0e,#1a1108);box-shadow:inset 0 0 14px #000,0 0 8px #0008;margin-bottom:12px}
.hc{width:270px;flex:none}.tt{flex:1;text-align:center}
.tt h1{margin:0;font-size:30px;letter-spacing:6px;color:#f1c978;text-shadow:0 0 10px #e8a53a88}
.tt p{margin:2px 0 0;font-size:13px;letter-spacing:4px;color:#b8893f}
.nav{display:flex;gap:8px;justify-content:center;margin-bottom:6px}
.bn{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:7px 14px;border:2px solid #b8893f;
 border-radius:4px;background:linear-gradient(#4a3118,#24160a);color:#f1c978;font-size:13px;letter-spacing:2px;font-weight:bold;
 box-shadow:inset 0 1px 0 #e8c37a55,0 2px 4px #000a}
.bn:active,.bn.on{background:linear-gradient(#7a5420,#3b2610);color:#fff3c8}
.bn ha-icon{--mdc-icon-size:18px}
.ht{width:250px;flex:none;text-align:right}
.nx{font-size:38px;font-family:"Courier New",monospace;color:#ffb347;text-shadow:0 0 12px #ff8c1a;letter-spacing:3px}
.dt{font-size:12px;letter-spacing:2px;color:#b8893f}
.grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;align-items:start}
.col{display:flex;flex-direction:column;gap:12px}
.sec{position:relative;border:2px solid #b8893f;border-radius:6px;padding:26px 12px 10px;background:#00000040;box-shadow:inset 0 0 18px #000}
.sec::before{content:attr(data-t);position:absolute;top:-1px;left:50%;transform:translateX(-50%);padding:2px 16px;background:#b8893f;
 color:#1a1108;font-size:12px;font-weight:bold;letter-spacing:3px;border-radius:0 0 6px 6px;white-space:nowrap}
.row{display:flex;justify-content:space-between;align-items:center;padding:4px 2px;border-bottom:1px dotted #b8893f55;font-size:15px}
.row:last-child{border:0}.row b{color:#ffcf75;font-variant-numeric:tabular-nums}
.big{font-size:30px;color:#ffb347;text-shadow:0 0 8px #ff8c1a88;text-align:center;font-family:"Courier New",monospace}
.cap{font-size:11px;letter-spacing:2px;color:#b8893f;text-align:center}
.bl{display:flex;flex-wrap:nowrap;gap:6px;justify-content:space-between}
.lamp{flex:1 1 0;min-width:0;text-align:center;cursor:pointer;padding:6px 2px;border:1px solid #b8893f55;border-radius:5px}
.lamp ha-icon{--mdc-icon-size:34px;color:#6b5636;display:block;margin:0 auto 2px}
.lamp.on ha-icon{color:#ffd45e;filter:drop-shadow(0 0 7px #ffb300)}
.lamp span{font-size:9.5px;letter-spacing:.5px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.alls{display:flex;gap:8px;margin-top:8px}.alls .bn{flex:1}
.cs{position:relative;height:190px;border:1px solid #b8893f;border-radius:4px;overflow:hidden;background:#000}
.cam{display:none;width:100%;height:100%;object-fit:cover}.cam.on{display:block}
.cn{position:absolute;left:6px;bottom:4px;font-size:11px;background:#000a;padding:1px 6px;border-radius:3px}
.rm{display:flex;justify-content:space-between;align-items:center;padding:5px 2px;border-bottom:1px dotted #b8893f55;font-size:14px;cursor:pointer}
.rm:last-child{border:0}.rm.heat b{color:#ff8a3d}
.msg{font-size:13px;padding:3px 0;color:#ff9c6b}.ok{color:#9ec58a}
.tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.tile{border:2px solid #b8893f;border-radius:6px;padding:10px;background:#00000040;cursor:pointer}
.tile h3{margin:0 0 6px;font-size:14px;letter-spacing:2px;color:#f1c978}
.tile .big{font-size:26px}
.rcg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.rc{border:2px solid #b8893f;border-radius:6px;padding:10px;background:#00000040;text-align:center;position:relative}
.rc .nm{letter-spacing:2px;font-size:14px;color:#f1c978}
.rc .tg{font-size:12px;color:#b8893f;margin-bottom:4px}
.rc.heat{box-shadow:0 0 14px #ff6a0066}
.rc .acts{display:flex;gap:6px;margin-top:8px}.rc .acts .bn{flex:1;padding:6px 2px;font-size:11px;position:relative}
.hb{position:absolute;left:50%;top:-22px;transform:translateX(-50%);--mdc-icon-size:22px;color:#ffd45e;filter:drop-shadow(0 0 6px #ffb300)}
.kgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px}
.kgrid .cs{height:280px}
.bt{border-radius:6px;padding:8px;text-align:center;border:2px solid}
.bt.g{border-color:#6fa35a;color:#bfe3a8}.bt.m{border-color:#c9b04a;color:#f1dd85}
.bt.r{border-color:#c0492b;color:#ff9c7a}.bt.o{border-color:#665;color:#998}
.empty{opacity:.6;font-size:13px;text-align:center;padding:8px}
`;
const E = s => String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const LIGHT_ICONS = ["mdi:lightbulb-outline", "mdi:lightbulb-on"];

class EdisonDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._view = "home"; this._cfg = {}; this._cam = 0; this._camT = 0; this._sig = ""; this._busy = {};
    this.shadowRoot.innerHTML = `<style>${CSS}</style><div class="root"></div>`;
    this._root = this.shadowRoot.querySelector(".root");
    const act = ev => this._tap(ev);
    for (const t of ["pointerup", "click"]) this.shadowRoot.addEventListener(t, act, true);
    window.addEventListener("resize", () => this._fit());
    this._clock = setInterval(() => this._tick(), 1000);
  }
  disconnectedCallback() { clearInterval(this._clock); }
  set panel(p) { this._panel = p; this._cfg = (p && p.config) || {}; this.classList.toggle("kiosk", !!this._cfg.kiosk); this._sig = ""; this._render(); }
  set narrow(_) {} set route(_) {}
  set hass(h) { const first = !this._hass; this._hass = h; if (first || this._changed()) this._render(); }

  /* ---------- config & discovery ---------- */
  get C() { return this._cfg.config || {}; }
  _ids(domain, pred) { return Object.keys(this._hass.states).filter(e => e.startsWith(domain + ".") && (!pred || pred(e, this._hass.states[e]))); }
  _name(e) { const s = this._hass.states[e]; return (s && s.attributes.friendly_name) || e; }
  _val(e) { const s = this._hass.states[e]; return s && !["unavailable", "unknown"].includes(s.state) ? Number(s.state) : NaN; }
  get lights() { const l = this.C.lights; if (l && l.length) return l;
    const li = this._ids("light"); if (li.length) return li.slice(0, 5);
    return this._ids("switch", (e, x) => /licht|light|lampe|lamp|strahler|leucht|lampe/i.test(e + (x.attributes.friendly_name || ""))).slice(0, 5); }
  get climates() { const l = this.C.climates; return (l && l.length) ? l : this._ids("climate"); }
  get cameras() { const l = this.C.cameras; return (l && l.length) ? l : this._ids("camera").slice(0, 6); }
  get batteries() {
    const l = this.C.batteries; if (l && l.length) return l;
    return this._ids("sensor", (e, s) => s.attributes.device_class === "battery" && !/noah|soc$|_soc/i.test(e));
  }
  get weather() { return this.C.weather || this._ids("weather")[0]; }
  get alarm() { return this.C.alarm || this._ids("alarm_control_panel")[0]; }
  get solar() {
    return this.C.solar_power || this._ids("sensor", (e, s) => s.attributes.device_class === "power" && /solar|pv|photovolt/i.test(e + (s.attributes.friendly_name || "")))[0];
  }
  get grid() {
    return this.C.grid_power || this._ids("sensor", (e, s) => s.attributes.device_class === "power" && /grid|netz|total_active_power|shelly.*em/i.test(e + (s.attributes.friendly_name || "")))[0];
  }
  get statuses() { const l = this.C.status_sensors; return (l && l.length) ? l : this._ids("binary_sensor", (e, s) => ["moisture", "smoke", "door", "window", "motion", "occupancy", "safety"].includes(s.attributes.device_class)).slice(0, 8); }

  _watched() {
    const w = [this.weather, this.alarm, this.solar, this.grid, this.C.boiler_temp, this.C.flow_temp, this.C.waste,
      ...this.lights, ...this.climates, ...this.batteries, ...this.statuses];
    return w.filter(Boolean);
  }
  _changed() {
    const s = this._watched().map(e => { const x = this._hass.states[e]; return x ? x.state + "|" + (x.attributes.hvac_action || "") + (x.attributes.temperature || "") : "-"; }).join(";") +
      this.cameras.map(e => (this._hass.states[e]?.attributes.entity_picture || "")).join(";") + (this._hass.language || "");
    if (s === this._sig) return false; this._sig = s; return true;
  }

  /* ---------- actions ---------- */
  _tap(ev) {
    const t = ev.composedPath().find(n => n.dataset && (n.dataset.go || n.dataset.tg || n.dataset.all || n.dataset.hv || n.dataset.boost || n.dataset.mi));
    if (!t) return;
    if (ev.type === "click" && this._lastUp && Date.now() - this._lastUp < 700) { ev.stopPropagation(); return; }
    if (ev.type === "pointerup") this._lastUp = Date.now();
    const d = t.dataset, h = this._hass;
    if (d.go) { this._view = d.go; this._sig = ""; this._render(); this._fit(); }
    else if (d.tg) { h.callService("homeassistant", "toggle", { entity_id: d.tg }); t.classList.toggle("on"); }
    else if (d.all) { if (this._busy.all) return; this._busy.all = 1; setTimeout(() => this._busy.all = 0, 600);
      h.callService("homeassistant", d.all, { entity_id: this.lights }); }
    else if (d.hv) { const [e, m] = d.hv.split("|"); h.callService("climate", "set_hvac_mode", { entity_id: e, hvac_mode: m }); }
    else if (d.boost) { const sc = this.C.boost_script;
      if (sc) h.callService("script", "turn_on", { entity_id: sc, variables: { entity_id: d.boost } });
      else h.callService("climate", "set_preset_mode", { entity_id: d.boost, preset_mode: "boost" }); }
    else if (d.mi) { this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId: d.mi } })); }
  }

  /* ---------- rendering ---------- */
  _btn(label, go, icon, cls = "") { return `<div class="bn ${cls}" data-go="${go}">${icon ? `<ha-icon icon="${icon}"></ha-icon>` : ""}<span>${label}</span></div>`; }
  _hdr() {
    const sub = this._cfg.subtitle || "";
    const left = this._view === "home" ? "" : this._btn("ZURÜCK ZUR ÜBERSICHT", "home", "mdi:home");
    const nav = [["solar", "SOLAR", "mdi:solar-power"], ["heizung", "HEIZUNG", "mdi:radiator"], ["kamera", "KAMERA", "mdi:cctv"], ["batterien", "BATTERIE", "mdi:battery"]]
      .map(([k, l, i]) => this._btn(l, k, i, this._view === k ? "on" : "")).join("");
    return `<div class="hd"><div class="hc">${left}</div><div class="tt"><div class="nav">${nav}</div>
      <h1>${E((this._cfg.title || "").toUpperCase())}</h1><p>${E(sub)}</p></div>
      <div class="ht"><div class="nx" id="clk"></div><div class="dt" id="dat"></div></div></div>`;
  }
  _tick() {
    const c = this._root.querySelector("#clk"); if (!c) return;
    const n = new Date(), l = (this._hass && this._hass.language) || "de";
    c.textContent = n.toLocaleTimeString(l, { hour: "2-digit", minute: "2-digit" });
    this._root.querySelector("#dat").textContent = n.toLocaleDateString(l, { weekday: "long", day: "2-digit", month: "long" }).toUpperCase();
    if (Date.now() - this._camT > 120000) { this._camT = Date.now(); this._rotateCams(); }
  }
  _rotateCams() {
    const cams = [...this._root.querySelectorAll(".cs.rot .cam")]; if (!cams.length) return;
    this._cam = (this._cam + 1) % cams.length; cams.forEach((c, i) => c.classList.toggle("on", i === this._cam));
    const nm = this._root.querySelector(".cs.rot .cn"); if (nm) nm.textContent = cams[this._cam].dataset.n;
  }
  _img(e) { const s = this._hass.states[e]; return s && s.attributes.entity_picture ? s.attributes.entity_picture : ""; }
  _fmtW(v) { return isNaN(v) ? "–" : Math.abs(v) >= 1000 ? (v / 1000).toFixed(2) + " kW" : Math.round(v) + " W"; }

  _render() {
    if (!this._hass || !this._root) return;
    const v = this["_v_" + this._view] || this._v_home;
    this._root.innerHTML = this._hdr() + v.call(this);
    this._tick(); this._fit();
  }

  _v_home() {
    const h = this._hass, S = h.states;
    const lamps = this.lights.map(e => `<div class="lamp ${S[e]?.state === "on" ? "on" : ""}" data-tg="${e}"><ha-icon icon="${S[e]?.state === "on" ? LIGHT_ICONS[1] : LIGHT_ICONS[0]}"></ha-icon><span>${E(this._name(e).toUpperCase())}</span></div>`).join("");
    const w = this.weather && S[this.weather];
    const alarm = this.alarm && S[this.alarm];
    const msgs = this._messages();
    const sol = this._val(this.solar), grid = this._val(this.grid);
    const boiler = this.C.boiler_temp, flow = this.C.flow_temp;
    const cams = this.cameras;
    const rooms = this.climates.map(e => { const s = S[e]; if (!s) return ""; const heat = s.attributes.hvac_action === "heating";
      return `<div class="rm ${heat ? "heat" : ""}" data-mi="${e}"><span>${E(this._room(e))}</span><b>${s.attributes.current_temperature ?? "–"}° / ${s.attributes.temperature ?? "–"}°</b></div>`; }).join("");
    const waste = this._waste();
    const L = `
      <div class="sec" data-t="KESSELHAUS">${boiler || flow ? `
        ${boiler ? `<div class="big">${E(S[boiler]?.state ?? "–")}°</div><div class="cap">${E(this._name(boiler)).toUpperCase()}</div>` : ""}
        ${flow ? `<div class="row"><span>${E(this._name(flow))}</span><b>${E(S[flow]?.state ?? "–")}°</b></div>` : ""}` : `<div class="empty">Kessel-Sensoren in den Einstellungen wählen</div>`}</div>
      <div class="sec" data-t="SICHERHEIT">${alarm ? `<div class="big" data-mi="${this.alarm}">${E(alarm.state.replace(/_/g, " ").toUpperCase())}</div>` : ""}
        ${this.statuses.map(e => `<div class="row"><span>${E(this._name(e))}</span><b>${S[e]?.state === "on" ? "⚠" : "OK"}</b></div>`).join("") || (alarm ? "" : `<div class="empty">–</div>`)}</div>
      <div class="sec" data-t="BATTERIEN"><div class="row"><span>Niedrigste</span><b>${this._lowBat()}</b></div><div class="row"><span>Geräte</span><b>${this.batteries.length}</b></div></div>
      <div class="sec" data-t="NACHRICHTEN">${msgs.length ? msgs.map(m => `<div class="msg">⚠ ${E(m)}</div>`).join("") : `<div class="msg ok">Alles in Ordnung</div>`}</div>`;
    const M = `
      <div class="sec" data-t="BELEUCHTUNG"><div class="bl">${lamps || `<div class="empty">Keine Lichter</div>`}</div>
        <div class="alls"><div class="bn" data-all="turn_on">ALLE AN</div><div class="bn" data-all="turn_off">ALLE AUS</div></div></div>
      <div class="sec" data-t="VERBRAUCH"><div class="row"><span>Solar</span><b>${this._fmtW(sol)}</b></div>
        <div class="row"><span>Netz</span><b>${this._fmtW(grid)}</b></div></div>
      <div class="sec" data-t="RÄUME">${rooms || `<div class="empty">Keine Thermostate</div>`}</div>`;
    const R = `
      <div class="sec" data-t="ÜBERWACHUNG">${cams.length ? `<div class="cs rot">${cams.map((e, i) => `<img class="cam ${i === this._cam % cams.length ? "on" : ""}" data-n="${E(this._name(e))}" src="${this._img(e)}">`).join("")}
        <div class="cn">${E(this._name(cams[this._cam % cams.length]))}</div></div>` : `<div class="empty">Keine Kameras</div>`}</div>
      <div class="sec" data-t="WETTER">${w ? `<div class="big">${w.attributes.temperature ?? "–"}°</div><div class="cap">${E(w.state.toUpperCase())}</div>` : `<div class="empty">–</div>`}</div>
      <div class="sec" data-t="MÜLLABHOLUNG">${waste || `<div class="empty">Kein Müll-Sensor gewählt</div>`}</div>`;
    return `<div class="grid"><div class="col">${L}</div><div class="col">${M}</div><div class="col">${R}</div></div>`;
  }
  _room(e) { return this._name(e).replace(/better.?thermostat/i, "").replace(/thermostat/i, "").replace(/wand/i, "").trim(); }
  _lowBat() { const v = this.batteries.map(e => this._val(e)).filter(x => !isNaN(x)); return v.length ? Math.min(...v) + " %" : "–"; }
  _messages() {
    const m = [];
    for (const e of this.batteries) { const x = this._val(e); if (!isNaN(x) && x < 10) m.push(`${this._name(e)}: ${x} %`); }
    for (const e of this._ids("binary_sensor", (i, s) => ["moisture", "smoke"].includes(s.attributes.device_class) && s.state === "on")) m.push(`${this._name(e)}: ALARM`);
    return m;
  }
  _waste() {
    const e = this.C.waste, s = e && this._hass.states[e]; if (!s) return "";
    const today = new Date().toISOString().slice(0, 10);
    const items = Object.entries(s.attributes).filter(([k]) => /^\d{4}-\d{2}-\d{2}$/.test(k) && k >= today).sort().slice(0, 4);
    return items.map(([k, v]) => `<div class="row"><span>${new Date(k).toLocaleDateString(this._hass.language || "de", { weekday: "short", day: "2-digit", month: "2-digit" })}</span><b>${E(v)}</b></div>`).join("")
      || `<div class="row"><span>${E(s.state)}</span></div>`;
  }

  _v_solar() {
    const S = this._hass.states;
    const pw = this._ids("sensor", (e, s) => s.attributes.device_class === "power" && !isNaN(Number(s.state))).slice(0, 12);
    const en = this._ids("sensor", (e, s) => s.attributes.device_class === "energy" && s.attributes.state_class && !isNaN(Number(s.state))).slice(0, 12);
    const rows = l => l.map(e => `<div class="row" data-mi="${e}"><span>${E(this._name(e))}</span><b>${E(S[e].state)} ${E(S[e].attributes.unit_of_measurement || "")}</b></div>`).join("") || `<div class="empty">–</div>`;
    return `<div class="grid"><div class="sec" data-t="LEISTUNG"><div class="big">${this._fmtW(this._val(this.solar))}</div><div class="cap">SOLAR</div>
      <div class="big" style="font-size:22px">${this._fmtW(this._val(this.grid))}</div><div class="cap">NETZ</div></div>
      <div class="sec" data-t="LEISTUNGS-SENSOREN">${rows(pw)}</div><div class="sec" data-t="ENERGIE">${rows(en)}</div></div>`;
  }
  _v_heizung() {
    const S = this._hass.states;
    const cards = this.climates.map(e => { const s = S[e]; if (!s) return ""; const heat = s.attributes.hvac_action === "heating", m = s.state;
      return `<div class="rc ${heat ? "heat" : ""}">${heat ? `<ha-icon class="hb" icon="mdi:lightbulb-on"></ha-icon>` : ""}
        <div class="nm" data-mi="${e}">${E(this._room(e).toUpperCase())}</div>
        <div class="big">${s.attributes.current_temperature ?? "–"}°</div><div class="tg">Soll ${s.attributes.temperature ?? "–"}°</div>
        <div class="acts"><div class="bn ${m === "off" ? "on" : ""}" data-hv="${e}|off">AUS</div>
        <div class="bn ${m === "heat" ? "on" : ""}" data-hv="${e}|heat">HEIZEN</div><div class="bn" data-boost="${e}">BOOST</div></div></div>`; }).join("");
    const b = this.C.boiler_temp, f = this.C.flow_temp;
    const banner = (b || f) ? `<div class="sec" data-t="KESSEL" style="margin-bottom:12px">${b ? `<div class="row"><span>${E(this._name(b))}</span><b>${E(S[b]?.state)}°</b></div>` : ""}${f ? `<div class="row"><span>${E(this._name(f))}</span><b>${E(S[f]?.state)}°</b></div>` : ""}</div>` : "";
    return banner + `<div class="rcg">${cards || `<div class="empty">Keine Thermostate</div>`}</div>`;
  }
  _v_kamera() {
    const c = this.cameras.slice(0, 3);
    return `<div class="kgrid">${c.map(e => `<div class="sec" data-t="${E(this._name(e).toUpperCase())}"><div class="cs"><img class="cam on" src="${this._img(e)}"></div></div>`).join("")}</div>`;
  }
  _v_batterien() {
    const S = this._hass.states;
    const t = this.batteries.map(e => { const x = this._val(e), cls = isNaN(x) ? "o" : x < 10 ? "r" : x < 30 ? "m" : "g";
      return `<div class="bt ${cls}" data-mi="${e}"><div>${E(this._name(e))}</div><div class="big">${isNaN(x) ? "–" : x + " %"}</div></div>`; }).join("");
    return `<div class="tiles">${t || `<div class="empty">Keine Batterie-Sensoren</div>`}</div>`;
  }

  /* ---------- fit to screen ---------- */
  _fit() {
    const r = this._root; if (!r) return;
    const W = this.clientWidth || window.innerWidth, H = this.clientHeight || window.innerHeight;
    const s = Math.min(W / 1400, H / (r.scrollHeight || 1), 1.2);
    r.style.transform = `scale(${s})`; r.style.minHeight = (H / s) + "px";
    this._scale = s;
  }
}
customElements.define("edison-dashboard", EdisonDashboard);
