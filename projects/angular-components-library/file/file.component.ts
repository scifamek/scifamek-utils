import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  GeneralInputComponent,
  ITEM_VALUE,
} from 'angular-components-library/core';

export type FileFormat = 'jpg' | 'jpeg' | 'png' | 'gif' | 'pdf' | 'docx';

@Component({
  selector: 'acl-file',
  templateUrl: './file.component.html',
  styleUrls: ['./styles/file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AclFileComponent),
      multi: true,
    },
  ],
})
export class AclFileComponent
  extends GeneralInputComponent
  implements OnInit, AfterViewInit
{
  accept = '';
  @Input('available-formats') availableFormats!: FileFormat[];
  @HostBinding('class') classAttr!: string;
  data: any;
  @Input('default-img') defaultImg?: string;
  error!: string;
  file?: File;
  formControl?: FormControl;
  fullPath?: string;
  @ViewChild('img', { read: ElementRef, static: false })
  img!: ElementRef<HTMLImageElement>;
  insidePreview: string | undefined = undefined;
  nameFile?: string;
  @Output() onSelectedFile: EventEmitter<any>;
  @Input('path') path?: string;
  @Input('prefix') prefix?: string;
  @Input('radius') radius?: string;
  @Input('show-file') showFile = true;
  @HostBinding('style') style!: string;
  @Input() text = 'Subir archivo';
  @Input('transform-path') transformPath?: (p: string) => string;
  transformedPath?: string;
  @ViewChild('inputFile', { read: ElementRef })
  uploadComponent!: ElementRef<HTMLDivElement>;

  constructor(private cd: ChangeDetectorRef, private elementRef: ElementRef) {
    super();
    this.onSelectedFile = new EventEmitter();
  }

  addListener() {
    const inputElement: HTMLInputElement = this.uploadComponent
      .nativeElement as HTMLInputElement;

    inputElement.onchange = (event) => {
      event.preventDefault();
      this.error = '';
      var fileList: FileList | null = inputElement.files;
      if (fileList) {
        this.insidePreview = undefined;
        for (const key in fileList) {
          if (Object.prototype.hasOwnProperty.call(fileList, key)) {
            const file = fileList[key];

            const mimeType = file.type;
            let isValid = true;
            if (this.availableFormats) {
              const mime = this.searchMime(mimeType);
              if (mime) {
                const inc = previewMapper.includes(mime);
                if (inc) {
                  this.insidePreview = this.defaultImg;
                }
              }

              isValid = !!mime;
              if (!!mime) {
                isValid = this.availableFormats.includes(mime as FileFormat);
              }
            }

            if (isValid) {
              var reader = new FileReader();
              reader.onload = (e: any) => {
                this.onSelectedFile.emit({ file: file, url: e.target.result });

                this.value = e.target.result;
                this.fullPath = this.value;

                this._onChange(this.value);
                if (this.formControl) {
                  this.formControl.setValue(this.value);
                }
              };
              reader.readAsDataURL(file);

              this.file = file;
              this.nameFile = file.name;
            } else {
              this.error = 'Formato no válido.';
              this.cd.detectChanges();
              setTimeout(() => {
                this.error = '';
              }, 3000);
            }
          }
        }
      }
    };
  }



  writeValue(value: string): void {
    super.writeValue(value);

    this.fullPath = this.value;

  }

  clear() {
    this.file = undefined;
    this.insidePreview = undefined;
    this.nameFile = undefined;

    this.formControl?.setValue('');
    this.value = '';
  }

  getDisplayFormats() {
    return this.availableFormats.join(', ');
  }

  getExtension(url: string): string {
    const fragments = url.split('.');
    const last = fragments[fragments.length - 1];
    const n = last.split('?');

    return n[0];
  }

  ngAfterViewInit(): void {
    this.addListener();

    if (this.data) {
      if (this.data[ITEM_VALUE]) {
        this.value = this.data[ITEM_VALUE];
        this.path = this.value;
        this.refresh();
      }
    }

    if (this.radius) {
      this.style += ` border-radius: ${this.radius}; `;

      if (this.img) {
        this.img.nativeElement.style.borderRadius = this.radius;
      }
    }
    this.formControl?.registerOnChange((x: any) => {
      this.value = x;
      this.insidePreview = x;
      this.fullPath = x;
    });
  }

  ngOnInit(): void {
    this.updateInputs();

    this.refresh();
  }

  refresh() {
    if (this.path) {

      this.transformedPath = this.path;
      if (this.transformPath) {
        this.transformedPath = this.transformPath(this.path);
      }
      const mime = this.getExtension(this.path);

      const inc = previewMapper.includes(mime);

      
      if (inc) {
        this.insidePreview = this.defaultImg;
      } else {
        this.insidePreview = undefined;
      }
      if (this.prefix) {

        this.fullPath = `${this.prefix}/${this.transformedPath}`;
      } else {
        this.fullPath = this.transformedPath;
      }
    } else if (this.formControl && this.formControl.value) {
      this.insidePreview = this.formControl.value;
    } else if (this.defaultImg) {
      this.fullPath = this.defaultImg;
    }
    

    this.cd.detectChanges();
    if (this.availableFormats) {
      this.accept = this.availableFormats.map((x) => '.' + x).join(', ');
    }
  }

  searchMime(mime: string): FileFormat | undefined {
    for (const format in formatMapper) {
      const value: string[] | undefined = formatMapper[format as FileFormat];
      if (!!value && value.includes(mime)) {
        return format as FileFormat;
      }
    }
    return undefined;
  }

  uploadFile() {}
}

const formatMapper: {
  [key in FileFormat]?: string[];
} = {
  jpg: ['image/jpg', 'image/jpeg'],
  gif: ['image/gif'],
  png: ['image/png'],
  pdf: ['application/pdf'],
  docx: [
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
};
const previewMapper = ['docx'];
