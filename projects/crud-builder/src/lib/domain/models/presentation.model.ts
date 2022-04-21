enum Breakpoints {
  xs = 'xs',
  md = 'md',
  lg = 'lg',
  sm = 'sm',
  xl = 'xl',
  default = 'default',
}

export interface IPresentationModel {
  component: string;
  children: IPresentationModel[];
  responsive?: {
    [index in Breakpoints]?: {
      layout?: number;
      offset?: number;
    };
  };
}
