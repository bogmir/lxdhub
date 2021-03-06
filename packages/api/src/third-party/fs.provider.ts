import * as Fs from 'fs-extra';
export type FsType = typeof Fs;

/**
 * The Fs provider, which encapsulates
 * the Fs package into a injectable
 * module
 */
export const FsProvider = {
    provide: 'Fs',
    useFactory: () => Fs
};
