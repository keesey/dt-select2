// Additional type definitions for Select2 Adapters
// Definitions by: T. Michael Keesey <https://github.com/keesey/>

/// <reference path="./select2.d.ts"/>

interface Select2Options { // Extend with adapter fields.
  dataAdapter?: Function;
  dropdownAdapter?: Function;
  resultsAdapter?: Function;
  selectionAdapter?: Function;
  sorter?: (items: Select2AdapterDataItem[]) => Select2AdapterDataItem[];
}

interface Select2Adapter {
  bind(container: Select2AdapterContainer, $container: JQuery): void;
  destroy(): void;
  position($rendered: JQuery, $defaultContainer: JQuery): void;
  render(): JQuery;
}

interface Select2AdapterContainer {
  $container: JQuery;
  $dropdown: JQuery;
  $element: JQuery;
  $results: JQuery;
  $selection: JQuery;
  dataAdapter: Select2DataAdapter;
  dropdown: {
    $container: JQuery;
    $dropdown: JQuery;
    $dropdownContainer: JQuery;
    $dropdownParent: JQuery;
    $element: JQuery;
    options: Select2Options;
  };
  id: string;
  options: Select2Options;
  results: {
    $element: JQuery;
    $results: JQuery;
    data: {
      $element: JQuery;
      container: Select2AdapterContainer;
      options: Select2Options;
    };
    options: Select2Options;
  };
  selection: {
    $selection: JQuery;
    container: Select2AdapterContainer;
    options: Select2Options;
  };
  close(): void;
  data(): Select2AdapterDataItem[];
  destroy(): void;
  enable(enabled?: boolean): void;
  isOpen(): boolean;
  on(eventName: string, handler: (event: JQueryEventObject, ...args: any[]) => any): void;
  open(): void;
  render(): void;
  toggleDropdown(): void;
  trigger(eventName: string, ...args: any[]): void;
}

interface Select2AdapterDataItem extends IdTextPair {
  disabled: boolean;
  element: HTMLOptionElement;
  selected: boolean;
}

interface Select2DataAdapter extends Select2Adapter {
  current(callback: (data: Select2AdapterDataItem[]) => any): void;
  query(options: Select2QueryOptions, callback: (data: Select2AdapterDataItem[]) => any): void;
}

interface Select2DropdownAdapter extends Select2Adapter {
}

interface Select2ResultsAdapter extends Select2Adapter {
}

interface Select2SelectionAdapter extends Select2Adapter {
  update(data: Select2AdapterDataItem[]): void;
}
