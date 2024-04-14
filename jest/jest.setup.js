import 'whatwg-fetch';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(),
    useNavigate: jest.fn()
  };
});
