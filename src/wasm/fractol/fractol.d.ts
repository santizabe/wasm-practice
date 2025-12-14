
  // Options you can pass when creating the module
  export interface FractolModuleOptions {
    arguments?: string[];
    canvas?: HTMLElement | HTMLCanvasElement | OffscreenCanvas | null;
    locateFile?: (path: string) => string;
    print?: (text: string) => void;
    printErr?: (text: string) => void;
    onAbort?: (msg: string) => void;
    onExit?: (status: number) => void;
    [key: string]: any;
  }

  // Emscripten module runtime methods
  export interface FractolModule {
    _main(_0: number, _1: number): number;

    ccall(
      ident: unknown,
      returnType?: string | null,
      argTypes?: unknown[],
      args?: unknown[],
      opts?: unknown
    ): unknown;

    cwrap(
      ident: unknown,
      returnType?: string,
      argTypes?: unknown[],
      opts?: unknown
    ): (...args: unknown[]) => unknown;

    emscripten_force_exit(status: number): void;
  }

  // Factory function that creates the module
  declare function createFractol(
    moduleArg?: FractolModuleOptions
  ): Promise<FractolModule>;

  export default createFractol;

