import createCube from "./cub3D/cub3D";
import createFractol from "./fractol/fractol";

let currentModule: any = null;

const cancelCurrentModule = () => {
  if (currentModule) {
    try {
      if (currentModule.emscripten_force_exit) {
        currentModule.emscripten_force_exit(0);
        console.log("Module deleted with force exit");
      }
      if (currentModule.quit) {
        currentModule.quit();
        console.log("Module deleted with quit");
      }
      if (currentModule.exit) {
        currentModule.exit();
        console.log("Module deleted with exit");
      }
    } catch (e) {
      console.log('Module cleanup:', e);
    }
    currentModule = null;
  }
}

export async function launchCube() {
  cancelCurrentModule();
  const module = await createCube({
    arguments: ['textures/map.cub'],
    canvas: document.getElementById("canvas"),
    locateFile: (path: string) => {
      if (path.endsWith('.data'))
        return '/wasm/' + path;
      return '/src/wasm/cub3D/' + path;
    },
    print: (text: string) => { console.log('[Cub3d]:', text);},
    printErr: (text: string) => { console.error('[cub3d Error]:', text);},
    onAbort: (msg: string) => { console.error('Module aborted:', msg); },
    onExit: (status: number) => { console.log('Module exited with status:', status); }
  });

  currentModule = module;
}

export async function launchFractolMandelbrot() {
  cancelCurrentModule();

  const module = await createFractol({
    arguments: ["mandelbrot"],
    canvas: document.getElementById("canvas"),
    print: (text: string) => { console.log('[Mandelbrot]:', text);},
    printErr: (text: string) => { console.error('[Mandel Error]:', text);},
    onAbort: (msg: string) => { console.error('Module aborted:', msg); },
    onExit: (status: number) => { console.log('Module exited with status:', status); }
  });

  currentModule = module;
}

export async function launchFractolJulia() {
   cancelCurrentModule();

  const module = await createFractol({
    arguments: ["julia", "0", "0", "-s"],
    canvas: document.getElementById("canvas"),
    print: (text: string) => { console.log('[Julia]:', text);},
    printErr: (text: string) => { console.error('[Julia Error]:', text);},
    onAbort: (msg: string) => { console.error('Module aborted:', msg); },
    onExit: (status: number) => { console.log('Module exited with status:', status); }
  });

  currentModule = module;
}
