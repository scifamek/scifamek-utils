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

  updateInputs() {
    if (this.data && this.data['configuration']) {
      let obj = this as any;
      if (this.data['dataFunction']) {
        obj.dataFunction = this.data['dataFunction'];
      }

      if (this.data['formControl']) {
        obj.formControl = this.data['formControl'];
      }

      if (this.data['relativeProperty']) {
        obj.relativeProperty = this.data['relativeProperty'];
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
          const capital = firstWord + otherWords.join('');
          obj[capital] = element;
        }
      }
    }
  }
}
