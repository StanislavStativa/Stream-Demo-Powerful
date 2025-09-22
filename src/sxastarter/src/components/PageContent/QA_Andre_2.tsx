import React, { JSX } from 'react';
import {
  Field,
  RichText,
  RichTextField,
  Text,
  Link, // Importing Link for General Link handling
  LinkField,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  SingleLine1: Field<string>;
  SingleLine2: Field<string>;
  MultiLine1: Field<string>;
  MultiLine2: Field<string>;
  RichText1: RichTextField;
  RichText2: RichTextField;
  Integer1: Field<string>;
  Integer2: Field<string>;
  Number1: Field<string>;
  Number2: Field<string>;
  MultiList1: Field<unknown>;
  MultiList2: Field<unknown>;
  MultiListSearch1: Field<unknown>;
  MultiListSearch2: Field<unknown>;
  TreeList1: Field<unknown>;
  TreeList2: Field<unknown>;
  MultiRootTreeList1: Field<unknown>;
  MultiRootTreeList2: Field<unknown>;
  CheckBox1: Field<string>;
  CheckBox2: Field<string>;
  CheckList1: Field<unknown>;
  CheckList2: Field<unknown>;
  TagList1: Field<unknown>;
  TagList2: Field<unknown>;
  Link1: LinkField;
  Link2: LinkField;
  DropList1: Field<string>;
  DropList2: Field<string>;
  DropLink1: Field<{ label: string }>;
  DropLink2: Field<{ label: string }>;
  DropTree1: Field<{ label: string }>;
  DropTree2: Field<{ label: string }>;
  DateTime1: Field<string>;
  DateTime2: Field<string>;
  Date1: Field<string>;
  Date2: Field<string>;
}

export type QAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: QAProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Default</span>
    </div>
  </div>
);
export const Default = (props: QAProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return props.fields ? (
    <div
      className={`component qa-andre-1 ${props?.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <p className="title">
          <strong>Single Line</strong>
        </p>
        <div className="subtitle">
          <Text field={props.fields?.SingleLine1} />
        </div>
        <p className="subtitle">
          <Text field={props.fields?.SingleLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi Line</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.MultiLine2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Rich Text</strong>
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText1} />
        </p>
        <p className="subtitle">
          <RichText field={props.fields?.RichText2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Integer</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Integer2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Number</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Number2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop List</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DropList2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Date</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Date1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.Date2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Date Time</strong>
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DateTime1} />
        </p>
        <p className="subtitle">
          <Text field={props.fields?.DateTime2} />
        </p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Link</strong>
        </p>
        <p className="subtitle">{props.fields.DropLink1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink1.value)}</p>
        <p className="subtitle">{props.fields.DropLink2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropLink2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Drop Tree</strong>
        </p>
        <p className="subtitle">{props.fields.DropTree1?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree1.value)}</p>
        <p className="subtitle">{props.fields.DropTree2?.value?.label}</p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.DropTree2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList1.value)
            ? props.fields.MultiList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiList2.value)
            ? props.fields.MultiList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multi List Search</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch1.value)
            ? props.fields.MultiListSearch1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiListSearch2.value)
            ? props.fields.MultiListSearch2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiListSearch2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList1.value)
            ? props.fields.TreeList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.TreeList2.value)
            ? props.fields.TreeList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TreeList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Multiroot Tree List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList1.value)
            ? props.fields.MultiRootTreeList1.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.MultiRootTreeList2.value)
            ? props.fields.MultiRootTreeList2.value
                .map((item: { label: string }) => item?.label)
                .join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.MultiRootTreeList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Check Box</strong>
        </p>
        <p className="subtitle">{props.fields.CheckBox1.value.toString()}</p>
        <p className="subtitle">{props.fields.CheckBox2.value.toString()}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Check List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.CheckList1.value)
            ? props.fields.CheckList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.CheckList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.CheckList2.value)
            ? props.fields.CheckList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.CheckList2.value)}</p>
      </div>

      <div className="container">
        <p className="title">
          <strong>Tag List</strong>
        </p>
        <p className="subtitle">
          {Array.isArray(props.fields.TagList1.value)
            ? props.fields.TagList1.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TagList1.value)}</p>
        <p className="subtitle">
          {Array.isArray(props.fields.TagList2.value)
            ? props.fields.TagList2.value.map((item: { label: string }) => item?.label).join(', ')
            : ''}
        </p>
        <p className="subtitle">JSON: {JSON.stringify(props.fields.TagList2.value)}</p>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};

export const PrettierByAI = (props: QAProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return props.fields ? (
    <div
      className={`component variant-grid ${props?.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Single Line Text */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Single Line Text</h3>
          <div className="whitespace-pre-line">
            <Text field={props.fields?.SingleLine1} />
            <br />
            <Text field={props.fields?.SingleLine2} />
          </div>
        </div>

        {/* Multi Line Text */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Multi Line Text</h3>
          <div className="whitespace-pre-line">
            <Text field={props.fields?.MultiLine1} />
            <br />
            <Text field={props.fields?.MultiLine2} />
          </div>
        </div>

        {/* Rich Text */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Rich Text</h3>
          <div>
            <RichText field={props.fields?.RichText1} />
          </div>
          <div>
            <RichText field={props.fields?.RichText2} />
          </div>
        </div>

        {/* Integer */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Integer</h3>
          <div className="whitespace-pre-line">
            <Text field={props.fields?.Integer1} />
            <br />
            <Text field={props.fields?.Integer2} />
          </div>
        </div>

        {/* Number */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Number</h3>
          <div className="whitespace-pre-line">
            <Text field={props.fields?.Number1} />
            <br />
            <Text field={props.fields?.Number2} />
          </div>
        </div>

        {/* Date */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Date</h3>
          <div className="whitespace-pre-line">
            <Text field={props.fields?.Date1} />
            <br />
            <Text field={props.fields?.Date2} />
          </div>
        </div>

        {/* Datetime */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Datetime</h3>
          <div className="whitespace-pre-line">
            <Text field={props.fields?.DateTime1} />
            <br />
            <Text field={props.fields?.DateTime2} />
          </div>
        </div>

        {/* Multilist */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Multilist</h3>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.MultiList1?.value) &&
              props.fields?.MultiList1?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.MultiList2?.value) &&
              props.fields?.MultiList2?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
        </div>

        {/* Multilist with Search */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Multilist with Search</h3>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.MultiListSearch1?.value) &&
              props.fields?.MultiListSearch1?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.MultiListSearch2?.value) &&
              props.fields?.MultiListSearch2?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
        </div>

        {/* Tree List */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Tree List</h3>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.TreeList1?.value) &&
              props.fields?.TreeList1?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.TreeList2?.value) &&
              props.fields?.TreeList2?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
        </div>

        {/* Multiroot Tree List */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Multiroot Tree List</h3>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.MultiRootTreeList1?.value) &&
              props.fields?.MultiRootTreeList1?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.MultiRootTreeList2?.value) &&
              props.fields?.MultiRootTreeList2?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
        </div>

        {/* Checklist */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Checklist</h3>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.CheckList1?.value) &&
              props.fields?.CheckList1?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.CheckList2?.value) &&
              props.fields?.CheckList2?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
        </div>

        {/* Taglist */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Tag List</h3>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.TagList1?.value) &&
              props.fields?.TagList1?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
          <div className="text-sm whitespace-pre-line">
            {Array.isArray(props.fields?.TagList2?.value) &&
              props.fields?.TagList2?.value
                .map((item: { label: string }) => item?.label)
                .join('\n')}
          </div>
        </div>

        {/* Checkbox */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Checkbox</h3>
          <div className="whitespace-pre-line">
            <Text field={props.fields?.CheckBox1} />
            <br />
            <Text field={props.fields?.CheckBox2} />
          </div>
        </div>

        {/* General Link */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">General Link</h3>
          <div>
            <Link field={props.fields?.Link1}>
              {' '}
              {/* Use Link component from Sitecore SDK */}
              {props.fields?.Link1?.value?.text || 'Link 1'}
            </Link>
          </div>
          <div>
            <Link field={props.fields?.Link2}>
              {' '}
              {/* Use Link component from Sitecore SDK */}
              {props.fields?.Link2?.value?.text || 'Link 2'}
            </Link>
          </div>
        </div>

        {/* Droptree */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Droptree</h3>
          <div>
            <span>Tree 1: {props.fields?.DropTree1?.value?.label}</span>
          </div>
          <div>
            <span>Tree 2: {props.fields?.DropTree2?.value?.label}</span>
          </div>
        </div>

        {/* Droplink */}
        <div className="tile bg-gray-100 rounded-md shadow-md p-4">
          <h3 className="tile-title text-lg font-bold mb-2">Droplink</h3>
          <div>
            <span>Link 1: {props.fields?.DropLink1?.value?.label}</span>
          </div>
          <div>
            <span>Link 2: {props.fields?.DropLink2?.value?.label}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
