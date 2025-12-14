
  export interface CubeModuleOptions {
    arguments?: string[];
    canvas?: HTMLElement | HTMLCanvasElement | OffscreenCanvas | null;
    locateFile?: (path: string) => string;
    print?: (text: string) => void;
    printErr?: (text: string) => void;
    onAbort?: (msg: string) => void;
    onExit?: (status: number) => void;
    [key: string]: any;
  }

  export interface CubeModule {
    _main(_0: number, _1: number): number;

    // Emscripten runtime methods
    ccall(ident: unknown, returnType?: string | null, argTypes?: unknown[], args?: unknown[], opts?: unknown): unknown;
    cwrap(ident: unknown, returnType?: string, argTypes?: unknown[], opts?: unknown): (...args: unknown[]) => unknown;
    FS_createPath(...args: unknown[]): unknown;
    FS_createDataFile(...args: unknown[]): unknown;
    FS_preloadFile(parent: unknown, name: unknown, url: unknown, canRead: unknown, canWrite: unknown, dontCreateFile: unknown, canOwn: unknown, preFinish: unknown): Promise<void>;
    FS_unlink(...args: unknown[]): unknown;
    FS_createLazyFile(...args: unknown[]): unknown;
    FS_createDevice(...args: unknown[]): unknown;
    addRunDependency(id: unknown): void;
    removeRunDependency(id: unknown): void;
    emscripten_force_exit(status: number): void;
  }

  export type MainModule = CubeModule;

  declare function createCube(moduleArg?: CubeModuleOptions): Promise<CubeModule>;

  export default createCube;
