interface Deparment {
  id: number;
  name: string;
}

export class DeparmentComponent {
  departments: Deparment[] = [
    {id: 1, name: 'Finance'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Marketing'},
    {id: 4, name: 'Management'},
    {id: 5, name: 'Sales'},
    {id: 6, name: 'Admin'},
    {id: 7, name: 'All'}
  ];
}
