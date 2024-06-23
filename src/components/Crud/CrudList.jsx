import { useSelector } from 'react-redux';
import CrudListItems from './CrudListItems';
import Loader from '../UI/Loader';
import GrayBG from '../UI/GrayBG';

export const CrudList = ({ className, onShowModal, onHandleEdit }) => {
  const { status } = useSelector((state) => state.crud);
  const CrudListClasses = `relative overflow-x-auto shadow-md sm:rounded-lg ${className}`;
  return (
    <div className={CrudListClasses}>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <td className="px-6 py-3">ID </td>
            <td className="px-6 py-3">Name </td>
            <td className="px-6 py-3">Email </td>
            <td className="px-6 py-3">Actions </td>
          </tr>
        </thead>
        <tbody>
          <CrudListItems
            onShowModal={onShowModal}
            onHandleEdit={onHandleEdit}
          />
        </tbody>
      </table>
      {status === 'loading' ? (
        <GrayBG>
          <Loader className="inline-block absolute top-1/2 left-1/2 z-50" />
        </GrayBG>
      ) : null}
    </div>
  );
};
