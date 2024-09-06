// global.d.ts

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.scss";

// Webpack의 require.context 타입 정의
declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys: () => string[];
    <T>(id: string): T;
    resolve: (id: string) => string;
    id: string;
  }
}

declare function require(context: any): any;
