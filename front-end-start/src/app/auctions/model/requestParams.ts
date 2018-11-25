export class RequestParams {
  pageSize?: number;
  page?: number;
  filter?: Filter;
  category?: string;
  name?: String;
  sort?: string;
  sortDirection?: string;
}

export class Filter {
  category: string;
  name: string;
}
