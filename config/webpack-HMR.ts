import { Server } from "http"

type ModuleId = string | number

interface WebpackHotModule {
  hot?: {
    data: any
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void
    accept(dependency: string, callback?: () => void): void
    accept(errHandler?: (err: Error) => void): void
    dispose(callback: (data: any) => void): void
  }
}

declare const module: WebpackHotModule

const exec: (server: Server) => void = (server: Server) => {
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(server.close)
  }
}

export default { exec }