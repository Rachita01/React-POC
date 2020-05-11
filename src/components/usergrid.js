import React from 'react';

import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';
 
// Component's Base CSS
import '../index.css';
 

 
let documents = [
  {
    id: 1,
    documentname: 'Document one',
    revision: '1.0',
  },
  {
    id: 2,
    documentname: 'Document two',
    revision: '1.0',
  },
];
 
const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};
 
const getSorter = (data) => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_DESCENDING(mapper);
 
  if (data.field === 'id') {
    sorter = data.direction === 'descending' ?
      SORTERS.NUMBER_DESCENDING(mapper) : SORTERS.NUMBER_ASCENDING(mapper);
  } else {
    sorter = data.direction === 'descending' ?
      SORTERS.STRING_DESCENDING(mapper) : SORTERS.STRING_ASCENDING(mapper);
  }
 
  return sorter;
};
 
 
let count = documents.length;
const service = {
  fetchItems: (payload) => {
    let result = Array.from(documents);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: (document) => {
    count += 1;
    documents.push({
      ...document,
      id: count,
    });
   return Promise.resolve(document);
  },
  update: (data) => {
    const document = documents.find(t => t.id === data.id);
    document.documentname = data.documentname;
    document.revision = data.revision;
    return Promise.resolve(document);
  },
  delete: (data) => {
    const document = documents.find(t => t.id === data.id);
    documents = documents.filter(t => t.id !== document.id);
    return Promise.resolve(document);
  },
};
 
const styles = {
  container: { margin: '50px 0 0 100px', width: 'fit-content' },
};
 
const Example = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Documents"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field
          name="id"
          label="Id"
          hideInCreateForm
        />
        <Field
          name="documentname"
          label="Document Name"
          placeholder="Document Name"
        />
        <Field
          name="revision"
          label="Revision"
          placeholder="1.0"
        />
      </Fields>
      <CreateForm
        title="Create a new document"
        message="Create a new document!"
        trigger="Create Document"
        onSubmit={(document) => service.create(document)}
        submitText="Create"
        validate={(values) => {
          const errors = {};
          if (!values.documentname) {
            errors.documentname = 'Please, provide document\'s name';
          }
 
          if (!values.revision) {
            errors.revision= 'Please, provide document\'s revision';
          }
 
          return errors;
        }}
      />
 
      <UpdateForm
        title="Update the document"
        message="Update document"
        trigger="Update"
        onSubmit={document => service.update(document)}
        submitText="Update"
        validate={(values) => {
          const errors = {};
 
          if (!values.id) {
            errors.id = 'Please, provide id';
          }
 
          if (!values.documentname) {
            errors.documentname = 'Please, provide document\'s name';
          }
 
          if (!values.revision) {
            errors.revision = 'Please, provide document\'s revision';
          }
 
          return errors;
        }}
      />
 
      <DeleteForm
        title="Delete Document"
        message="Are you sure you want to delete the document?"
        trigger="Delete"
        onSubmit={document => service.delete(document)}
        submitText="Delete"
        validate={(values) => {
          const errors = {};
          if (!values.id) {
            errors.id = 'Please, provide id';
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);
 
Example.propTypes = {};
 
export default Example;