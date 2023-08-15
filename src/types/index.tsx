export type TodoItem = {
  value: string;
  done: boolean;
};

export type ListProps = {
  list: TodoItem[];
  updateItem: (item: TodoItem) => void;
  deleteItem: (item: TodoItem) => void;
};

export type ListItemProps = {
  item: TodoItem;
  updateItem: (item: TodoItem) => void;
  deleteItem: (item: TodoItem) => void;
};

export type InputWithButtonProps = {
  onPress: (input: string) => void;
};
