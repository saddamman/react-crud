import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails, deleteUserDetails } from "../../features/crudAction";

function CrudListItems({ onShowModal, onHandleEdit }) {
  const dispatch = useDispatch();
  const { userDataList } = useSelector((state) => state.crud);
  console.log(userDataList);
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
  const handleEdit = (currentEditItem) => {
    onShowModal();
    onHandleEdit(currentEditItem);
  };

  const handleDelte = (currentEditItem) => {
    dispatch(deleteUserDetails(currentEditItem));
  };

  if (!userDataList.length > 0) {
    return (
      <tr>
        <td colSpan="4" className="p-5">
          There is no user still Available ! Please add new user.
        </td>
      </tr>
    );
  }
  return (
    <>
      {userDataList.map((user, index) => {
        return (
          <tr key={index}>
            <td className="px-6 py-3">{index + 1} </td>
            <td className="px-6 py-3">{user.name}</td>
            <td className="px-6 py-3">{user.email} </td>
            <td className="px-6 py-3 space-x-2">
              <button onClick={() => handleEdit(userDataList[index])}>
                Edit
              </button>
              <button onClick={() => handleDelte(user)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default CrudListItems;
