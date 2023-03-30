import appConfig from "../../app-config.json";

export function getConfig<T>(getter: (config: typeof appConfig) => T) {
  return getter(appConfig);
}
