import React, { JSX } from 'react';
import {
  Field,
  ImageField,
  Image,
  RichTextField,
  Text,
  RichText,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Text: RichTextField;
  Image: ImageField;
}

export type AppPromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: AppPromoProps): JSX.Element => (
  <div className={`component ${props.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">AppPromo</span>
    </div>
  </div>
);

export const Default = (props: AppPromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return props.fields ? (
    <div
      className={`component app-promo ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="row row-gap-5 align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-6 fw-bold mb-3">
              <Text field={props.fields.Title} />
            </h1>
            <div className="col-lg-10 fs-5">
              <RichText field={props.fields.Text} />
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-6 image-wrapper">
            <Image
              field={props.fields.Image}
              className={`${isPageEditing ? 'd-block' : 'd-none'} mx-lg-auto img-fluid`}
            ></Image>
            <img
              src={props.fields.Image.value?.src}
              alt={props.fields.Image.value?.alt as string}
              className={`${isPageEditing ? 'd-none' : 'd-block'}s mx-lg-auto img-fluid`}
              style={{ transformOrigin: 'bottom' }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
