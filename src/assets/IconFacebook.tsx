import { IconType } from './type';

export const IconFacebook: React.FC<IconType> = (props) => {
  return (
    <svg
      className="feather feather-facebook"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
      stroke="currentColor"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      height="24"
      fill="none"
      width="24"
      {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
};
