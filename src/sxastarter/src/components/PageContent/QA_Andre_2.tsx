import React, { JSX } from 'react';
import { Field, RichText, RichTextField, Text } from '@sitecore-content-sdk/nextjs';

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
  DropList1: Field<string>;
  DropList2: Field<string>;
  DropLink1: Field<{ label: string }>;
  DropLink2: Field<{ label: string }>;
  DropTree1: Field<{ label: string }>;
  DropTree2: Field<{ label: string }>;
  MultiList1: Field<unknown>;
  MultiList2: Field<unknown>;
  MultiListSearch1: Field<unknown>;
  MultiListSearch2: Field<unknown>;
  TreeList1: Field<unknown>;
  TreeList2: Field<unknown>;
  MultiRootTreeList1: Field<unknown>;
  MultiRootTreeList2: Field<unknown>;
  Date1: Field<string>;
  Date2: Field<string>;
  DateTime1: Field<string>;
  DateTime2: Field<string>;
  CheckBox1: Field<string>;
  CheckBox2: Field<string>;
  CheckList1: Field<unknown>;
  CheckList2: Field<unknown>;
  TagList1: Field<unknown>;
  TagList2: Field<unknown>;
}

export type QAProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: QAProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Comparison</span>
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
      className={`component qa-andre-variant ${props?.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100 rounded-lg">
        {/* Single Line Texts */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Single Line Text</h3>
          <div>
            <Text field={props.fields?.SingleLine1} />
          </div>
          <div>
            <Text field={props.fields?.SingleLine2} />
          </div>
        </div>

        {/* Multi Line Texts */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Multi Line Text</h3>
          <div>
            <Text field={props.fields?.MultiLine1} />
          </div>
          <div>
            <Text field={props.fields?.MultiLine2} />
          </div>
        </div>

        {/* Rich Texts */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Rich Text</h3>
          <div>
            <RichText field={props.fields?.RichText1} />
          </div>
          <div>
            <RichText field={props.fields?.RichText2} />
          </div>
        </div>

        {/* Integers */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Integer</h3>
          <div>
            <Text field={props.fields?.Integer1} />
          </div>
          <div>
            <Text field={props.fields?.Integer2} />
          </div>
        </div>

        {/* Numbers */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Number</h3>
          <div>
            <Text field={props.fields?.Number1} />
          </div>
          <div>
            <Text field={props.fields?.Number2} />
          </div>
        </div>

        {/* Drop List */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Drop List</h3>
          <div>
            <Text field={props.fields?.DropList1} />
          </div>
          <div>
            <Text field={props.fields?.DropList2} />
          </div>
        </div>

        {/* Dates */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Date</h3>
          <div>
            <Text field={props.fields?.Date1} />
          </div>
          <div>
            <Text field={props.fields?.Date2} />
          </div>
        </div>

        {/* Date Times */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Date Time</h3>
          <div>
            <Text field={props.fields?.DateTime1} />
          </div>
          <div>
            <Text field={props.fields?.DateTime2} />
          </div>
        </div>

        {/* Drop Links */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Drop Link</h3>
          <div>
            <p className="text-sm">{props.fields?.DropLink1?.value?.label}</p>
          </div>
          <div>
            <p className="text-sm">{props.fields?.DropLink2?.value?.label}</p>
          </div>
        </div>

        {/* Drop Trees */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Drop Tree</h3>
          <div>
            <p className="text-sm">{props.fields?.DropTree1?.value?.label}</p>
          </div>
          <div>
            <p className="text-sm">{props.fields?.DropTree2?.value?.label}</p>
          </div>
        </div>

        {/* Multi Lists */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Multi List</h3>
          <div className="text-sm">
            {Array.isArray(props.fields?.MultiList1?.value) &&
              props.fields?.MultiList1?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
          <div className="text-sm">
            {Array.isArray(props.fields?.MultiList2?.value) &&
              props.fields?.MultiList2?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
        </div>

        {/* Multi List Search */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Multi List Search</h3>
          <div className="text-sm">
            {Array.isArray(props.fields?.MultiListSearch1?.value) &&
              props.fields?.MultiListSearch1?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
          <div className="text-sm">
            {Array.isArray(props.fields?.MultiListSearch2?.value) &&
              props.fields?.MultiListSearch2?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
        </div>

        {/* Tree List */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Tree List</h3>
          <div className="text-sm">
            {Array.isArray(props.fields?.TreeList1?.value) &&
              props.fields?.TreeList1?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
          <div className="text-sm">
            {Array.isArray(props.fields?.TreeList2?.value) &&
              props.fields?.TreeList2?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
        </div>

        {/* MultiRoot Tree List */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Multiroot Tree List</h3>
          <div className="text-sm">
            {Array.isArray(props.fields?.MultiRootTreeList1?.value) &&
              props.fields?.MultiRootTreeList1?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
          <div className="text-sm">
            {Array.isArray(props.fields?.MultiRootTreeList2?.value) &&
              props.fields?.MultiRootTreeList2?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
        </div>

        {/* Check Boxes */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Check Box</h3>
          <div>
            <p className="text-sm">{props.fields?.CheckBox1?.value?.toString()}</p>
          </div>
          <div>
            <p className="text-sm">{props.fields?.CheckBox2?.value?.toString()}</p>
          </div>
        </div>

        {/* Check Lists */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Check List</h3>
          <div className="text-sm">
            {Array.isArray(props.fields?.CheckList1?.value) &&
              props.fields?.CheckList1?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
          <div className="text-sm">
            {Array.isArray(props.fields?.CheckList2?.value) &&
              props.fields?.CheckList2?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
        </div>

        {/* Tag Lists */}
        <div className="tile bg-white shadow-md p-4 rounded-md">
          <h3 className="tile-title text-lg font-bold mb-2 text-blue-600">Tag List</h3>
          <div className="text-sm">
            {Array.isArray(props.fields?.TagList1?.value) &&
              props.fields?.TagList1?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
          <div className="text-sm">
            {Array.isArray(props.fields?.TagList2?.value) &&
              props.fields?.TagList2?.value
                .map((item: { label: string }) => item?.label)
                .join(', ')}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
