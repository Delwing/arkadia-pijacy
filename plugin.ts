/**
 * Podpowiedzi emotek Klubu Pijakow - Tab completion for the Klub Pijakow emotes
 * (the `pi*` commands).
 *
 * Every emote goes into the command line's Tab completion. The client completes
 * the last word being typed, so `pis` + Tab offers `pistuknij`.
 *
 * See README.md for build / host / publish details.
 */

import type { PluginApi, PluginInfo } from '@arkadia/plugin-types';

const PLUGIN_NAME = 'Podpowiedzi emotek Klubu Pijakow';
const PLUGIN_VERSION = '1.0.0';
const PLUGIN_AUTHOR = 'Dargoth';
const PLUGIN_DESCRIPTION = 'Podpowiedzi (Tab) dla emotek Klubu Pijakow.';

const SUGGESTIONS = [
  'piusmiechnij', // usmiechanie sie do kogos
  'pistuknij', // stukniecie sie z innym pijakiem
  'pinapelnij', // napelnienie kubka trunkiem
  'pirozwal', // rozwalenie beczulki z napitkiem
  'pipochwal', // pochwalenie sie swoim upiciem
  'pipotrzasnij', // potrzasniecie beczulka
  'pizachwiej', // zachwianie sie na nogach
  'pitrzes', // drgawki spowodowane brakiem alkoholu
  'pizatocz', // zatoczenie sie na kogos
  'pipodnies', // proba podniesienia kogos
];

let pluginApi: PluginApi | null = null;

export async function init(api: PluginApi): Promise<PluginInfo> {
  pluginApi = api;
  api.command.addSuggestions(...SUGGESTIONS);

  return {
    name: PLUGIN_NAME,
    version: PLUGIN_VERSION,
    author: PLUGIN_AUTHOR,
    description: PLUGIN_DESCRIPTION,
  };
}

export async function destroy(): Promise<void> {
  // The host calls destroy() with no arguments, so use the api captured at init.
  // It also drops the suggestions on unload; removing them here keeps a reload clean.
  pluginApi?.command.removeSuggestions(...SUGGESTIONS);
  pluginApi = null;
}
