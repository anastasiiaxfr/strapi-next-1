import type { Schema, Attribute } from '@strapi/strapi';

export interface SocSoc extends Schema.Component {
  collectionName: 'components_soc_socs';
  info: {
    displayName: 'soc';
    icon: 'crown';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'soc.soc': SocSoc;
    }
  }
}
