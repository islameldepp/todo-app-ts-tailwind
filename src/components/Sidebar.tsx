import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import AddTodoForm from './AddTodoForm';
import Button from './Button';

const Sidebar = () => {
  const { logout, login, register, isAuthenticated, isLoading, user } =
    useKindeAuth();
  return (
    <section className="flex flex-col col-[1/2] lg:col-[2/3] row-[3/4] lg:row-[2/3] bg-[#fffcf9] border-t lg:border-l border-black/[0.08] px-4 sm:px-[25px] py-4 sm:pt-[18px] sm:pb-[28px] gap-4">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p>Logged in as {user?.email}</p>
            <Button onClick={logout} buttonType="secondary">
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Log in
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
