# arkadia-pijacy

A plugin for the [Arkadia Web Client](https://github.com/Delwing/arkadia-web-client-extension)
that adds the emotes of *Klub Pijakow* (the `pi*` commands) to the command
line's Tab completion.

The plugin registers every emote with `api.command.addSuggestions`; the client
completes the **last word** being typed from those suggestions. None of these
emotes take a fixed argument, so each is offered bare. Suggestions are removed
again in `destroy()` (the host also drops them on unload).

## Files

- `plugin.ts` — the whole plugin; the emote list (`SUGGESTIONS`) is at the top.
- `plugin.json` — registry manifest. Keep its `version` in sync with
  `package.json` and `PLUGIN_VERSION` in `plugin.ts`.
- `DESCRIPTION.md` — the Polish, player-facing registry page.

## Build / develop

```
yarn install
yarn build       # dist/plugin.js
yarn dev         # serves http://localhost:5179/plugin.js
yarn typecheck
```

## Publishing

`deploy.yml` publishes `dist/` to GitHub Pages on `master`, `publish.yml`
uploads `plugin.json` + `plugin.ts` to the plugin registry on a `v*` tag (slug
`pijacy`, trusted publisher `Delwing/arkadia-pijacy` / `publish.yml`).
