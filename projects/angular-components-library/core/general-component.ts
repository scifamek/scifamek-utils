export function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

export class RenderedGeneralComponent {
  data: any;
  classAttr!: string;
  style!: string;

  resolveResponsive(): string {
    let response = '';
    const SIZES_WITH_PREFIX = ['sm', 'md', 'lg', 'xl', 'xxl'];

    if (this.data) {
      if (this.data.responsive) {
        const map = {};
        for (const key in this.data.responsive) {
          const element = this.data.responsive[key];
          if (key !== 'default') {
            let prefix = `-${key}`;

            if (key == 'xs') {
              prefix = '';
            }
            response += ` col${prefix}-${element['layout']}`;
            // if ('offset' in element) {
            //   response += ` col${prefix}-offset-${element['offset']}`;
            // }
          } else {
            for (const size of SIZES_WITH_PREFIX) {
              if (Object.keys(this.data.responsive).indexOf(size) === -1) {
                response += ` col-${size}-${element['layout']}`;
              }
            }
          }
        }
      }
    }

    this.classAttr = response;
    return response;
  }

  resolveSpacing(): string {
    let response = '';

    if (this.data) {
      if (this.data.spacing) {
        if (this.data.spacing['padding']) {
          response += ` padding: ${this.data.spacing['padding']};`;
        }
        if (this.data.spacing['margin']) {
          response += ` margin: ${this.data.spacing['margin']};`;
        }
      }
    }
    this.style = response;
    return response;
  }
  updateInputs() {
    if (this.data && this.data['configuration']) {
      let instance = this as any;
      if (this.data['dataFunction']) {
        instance.dataFunction = this.data['dataFunction'];
      }

      if (this.data['formControl']) {
        instance.formControl = this.data['formControl'];
      }

      if (this.data['relativeProperty']) {
        instance.relativeProperty = this.data['relativeProperty'];
      }

      for (const key in this.data['configuration']) {
        if (
          Object.prototype.hasOwnProperty.call(this.data['configuration'], key)
        ) {
          const element = this.data['configuration'][key];
          const fragments = key.split('-');
          const firstWord = fragments[0];
          const otherWords = fragments
            .filter((x) => x != firstWord)
            .map(
              (x: string) => `${x.charAt(0).toUpperCase()}${x.substring(1)}`
            );
          const capitalProperty = firstWord + otherWords.join('');
          instance[capitalProperty] = element;
        }
      }
    }

    this.resolveResponsive();
    this.resolveSpacing();
  }
}
