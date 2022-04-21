import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { IActionModel, IDefinitionModel } from 'crud-builder';
import { of } from 'rxjs';

@Component({
  selector: 'app-crud-builder-example',
  templateUrl: './crud-builder-example.component.html',
  styleUrls: ['./crud-builder-example.component.scss'],
})
export class CrudBuilderExampleComponent implements AfterViewInit {
  title = 'showcase';

  /**
   * Lets you to define the schema definition for the collection. That means that the structure of the collection.
   *
   * @type {IDefinitionModel}
   * @memberof CrudBuilderExampleComponent
   */
  schemaDefinition: IDefinitionModel = {
    columns: [
      {
        definition: 'name',
        tag: 'Nombre',
      },
      {
        definition: 'lastname',
        tag: 'Apellido',
      },
      {
        definition: 'age',
        tag: 'Edad',
      },
      {
        definition: 'pet',
        tag: 'Mascota',
      },
      {
        definition: 'pets',
        tag: 'Mascotas',
      },
    ],
    definitions: ['name', 'lastname', 'age', 'pet', 'pets'],
    tags: ['Nombre', 'Apellido', 'Edad', 'Mascota', 'Mascotas'],
    relationship: [
      {
        from: 'pet-id',
        to: 'pet',
        dataFunction: () => {
          return of([
            {
              display: 'Tobby',
              value: 'tobby-id',
            },
            {
              display: 'Sacha',
              value: 'sacha-id',
            },
          ]);
        },
      },

      {
        from: 'pet-ids',
        to: 'pets',
        dataFunction: () => {
          return of([
            {
              display: 'Tobby',
              value: 'tobby-id',
            },
            {
              display: 'Sacha',
              value: 'sacha-id',
            },
          ]);
        },
      },
    ],
    schema: {
      collection: 'tutors',
      type: 'entity',
      presentation: {
        icon: 'supervisor_account',
      },
      display: 'Tutores',
      repr: ['name', 'lastname'],
      definition: {
        _id: {
          display: 'Identificador',
          usable: true,
          visible: false,
          type: 'ObjectId',
          required: true,
        },
        name: {
          display: 'Primer Nombre',
          usable: true,
          visible: true,
          type: 'string',
          required: true,
        },
        lastname: {
          display: 'Segundo Nombre',
          usable: true,
          visible: true,
          type: 'string',
          required: true,
        },
        pet_id: {
          display: 'Mascotas',
          usable: true,
          visible: true,
          type: '[ObjectId]',
          relationship: 'pet',
          required: true,
        },
      },
    },
  };

  /**
   * This attribute is used for defining the presentation schema when you want to display
   * the detail of a item.
   *
   * @memberof CrudBuilderExampleComponent
   */
  presentationDefinition = {
    component: 'acl-container',
    children: [
      {
        component: 'acl-row',
        children: [
          {
            component: 'acl-col',

            responsive: {
              default: {
                layout: 4,
              },
            },
            children: [
              {
                validators: ['$noEmpty'],
                component: 'acl-input',
                property: 'name',
                configuration: {
                  'left-icon': 'person',
                  placeholder: 'Raúl',
                  label: 'Primer Nombre',
                  type: 'input',
                },
                responsive: {
                  xs: {
                    layout: 12,
                    offset: 0,
                  },
                  md: {
                    layout: 4,
                  },
                  default: {
                    layout: 4,
                  },
                },
              },
            ],
          },

          {
            component: 'acl-col',
            responsive: {
              default: {
                layout: 4,
              },
            },
            children: [
              {
                validators: ['$noEmpty'],
                component: 'acl-input',
                property: 'lastname',
                configuration: {
                  'left-icon': 'people',

                  placeholder: 'Raúl',
                  label: 'Apellido',
                  type: 'input',
                },
                responsive: {
                  xs: {
                    layout: 12,
                    offset: 0,
                  },
                  md: {
                    layout: 8,
                  },
                  default: {
                    layout: 6,
                  },
                },
              },
            ],
          },

          {
            component: 'acl-col',
            responsive: {
              default: {
                layout: 4,
              },
            },
            children: [
              {
                validators: ['$noEmpty'],
                component: 'acl-input',
                property: 'age',
                configuration: {
                  'left-icon': 'date_range',
                  placeholder: '25',
                  label: 'Edad',
                  type: 'input',
                },
                responsive: {
                  xs: {
                    layout: 12,
                    offset: 0,
                  },
                  md: {
                    layout: 8,
                  },
                  default: {
                    layout: 6,
                  },
                },
              },
            ],
          },
        ],
      },
      {
        component: 'acl-row',
        children: [
          {
            component: 'acl-col',

            responsive: {
              default: {
                layout: 6,
              },
            },
            children: [
              {
                validators: ['$noEmpty'],
                component: 'acl-select',
                property: 'pet-id',
                configuration: {
                  icon: 'grading',
                  placeholder: 'Rayo',
                  label: 'Mascota Actual',
                  hint: 'Error',
                  color: 'tertiary',
                },
                responsive: {
                  xs: {
                    layout: 12,
                    offset: 0,
                  },
                  md: {
                    layout: 4,
                  },
                  default: {
                    layout: 6,
                  },
                },
              },
            ],
          },

          {
            component: 'acl-col',
            responsive: {
              default: {
                layout: 6,
              },
            },
            children: [
              {
                validators: ['$noEmpty'],
                component: 'acl-select',
                property: 'pet-ids',
                configuration: {
                  icon: 'grading',
                  placeholder: 'Raúl',
                  label: 'Mascotas',
                  hint: '',
                  multiple: true,
                },
                responsive: {
                  xs: {
                    layout: 12,
                    offset: 0,
                  },
                  md: {
                    layout: 8,
                  },
                  default: {
                    layout: 6,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  };

  /**
   * This parameter lets you specify the action that creates a new item
   * into the collection that you are seeing.
   *
   *
   * @memberof CrudBuilderExampleComponent
   */
  createAction = {
    display: 'Nuevo',
    event: (obj: any) => {
      console.log('Este es el item nuevo ', obj);
      return of(null);
    },
  };

  /**
   * This parameter lets you specify the action that creates a new item
   * into the collection that you are seeing.
   *
   *
   * @memberof CrudBuilderExampleComponent
   */
  updateAction = {
    display: 'Actualizar',
    event: (item: any) => {
      console.log('New Item ', item);
      return of(item);
    },
  };

  /**
   * This attribute lets you to create the action per item.
   *
   * @type {IActionModel[]}
   * @memberof CrudBuilderExampleComponent
   */
  rowActions: IActionModel[] = [
    {
      display: 'Editar',
      icon: 'edit',
      event: (item: any, items: any[]) => {
        console.log('Imprime algo j', item);
        return Promise.resolve(item);
      },
      mode: 'edit',
    },
    {
      display: 'Eliminar',
      icon: 'clear',
      event: (item: any, items: any[]) => {
        console.log('Imprime algo', item, items);
        let index = items.indexOf(item);
        console.log(index);
        items.splice(index, 1);
        return Promise.resolve(item);
      },
    },
  ];

  /**
   *
   * @param page Page that you are currently looking
   * @param sizePage This is the size of the page, the items per page.
   * @param definition
   * @returns
   */
  dataFunction = (page: number, sizePage: number, definition: any) => {
    return of([
      {
        name: 'Sergio',
        lastname: 'Posada',
        age: Math.round(Math.random() * 50) + 18,
        pet: 'Tobby',
        'pet-id': 'tobby-id',
        pets: ['Tobby', 'Sacha'],
        'pet-ids': ['tobby-id', 'sacha-id'],
      },
      {
        name: 'Eli',
        lastname: 'Candamil',
        age: Math.round(Math.random() * 50) + 18,
        pet: 'Tobby',
        'pet-id': 'tobby-id',
        pets: ['Tobby', 'Sacha'],
        'pet-ids': ['tobby-id', 'sacha-id'],
      },
    ]);
  };

  /**
   * These actions are used to perform task for several items
   *
   * @type {IActionModel[]}
   * @memberof CrudBuilderExampleComponent
   */
  generalActions: IActionModel[] = [
    {
      display: 'Enviar Correos',
      event: (items: any[]) => {
        console.log('D=> ', items);
        return Promise.resolve(items);
      },
    },
    {
      display: 'Descargar Historial',
      event: (items: any[]) => {
        console.log('D=> ', items);
        return Promise.resolve(items);
      },
    },
  ];
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
