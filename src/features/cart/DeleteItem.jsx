import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';
function DeleteItem({ pizzaid }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaid))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
