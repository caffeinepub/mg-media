declare module "aos" {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    mirror?: boolean;
    offset?: number;
    delay?: number;
    easing?: string;
    anchor?: string;
    anchorPlacement?: string;
    disable?: boolean | string | (() => boolean);
  }

  interface Aos {
    init(options?: AosOptions): void;
    refresh(initialize?: boolean): void;
    refreshHard(): void;
  }

  const aos: Aos;
  export = aos;
}
