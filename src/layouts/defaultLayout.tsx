import { Outlet, useNavigate } from 'npm:react-router-dom';

export default function DefaultLayout() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Header of Layout</h1>

        <div>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/page1')}>Page1</button>
          <button onClick={() => navigate('/page2')}>Page2</button>
        </div>
      </header>

      <Outlet />
    </>
  );
}
