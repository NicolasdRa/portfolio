import styled from 'styled-components';

export const Wrapper = styled.div`
  .main-cursor,
  .secondary-cursor {
    z-index: 10000;

    pointer-events: none;
    /* overflow: hidden; */
    transform: translate3d(0, 0, 0);
    position: fixed;
  }

  .main-cursor {
    transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
    animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    mix-blend-mode: ${({ theme }) => theme.mode === 'dark' ? 'difference' : 'normal'};

    .main-cursor-background {
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.mode === 'dark' ? theme.colors.primary2 : theme.colors.black};
      border-radius: 50%;
      box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 0 10px rgba(252, 94, 102, 0.5)' : 'none'};
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }
  }

  .secondary-cursor {
    width: 50px;
    height: 50px;

    .cursor-background {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.grey4 : theme.colors.grey5};
      opacity: ${({ theme }) => theme.mode === 'dark' ? 0.8 : 1};
      position: relative;
      animation: scaleDown 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s forwards;
      transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }
  }

  .hover {
    .cursor-background {
      opacity: ${({ theme }) => theme.mode === 'dark' ? 0.3 : 0.2};
      background-color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.primary3 : theme.colors.grey5};
      border: none;
      animation: scaleUp 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s forwards;
      box-shadow: ${({ theme }) =>
        theme.mode === 'dark' ? '0 0 20px rgba(251, 54, 64, 0.3)' : 'none'};
    }

    .main-cursor-background {
      background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.white : theme.colors.black};
    }
  }

  .hover-social {
    .cursor-background {
      opacity: ${({ theme }) => theme.mode === 'dark' ? 0.3 : 0.2};
      background-color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.primary2 : theme.colors.grey5};
      border: none;
      box-shadow: ${({ theme }) =>
        theme.mode === 'dark' ? '0 0 15px rgba(252, 94, 102, 0.3)' : 'none'};
    }
  }

  .38 {
    .cursor-background {
      opacity: ${({ theme }) => theme.mode === 'dark' ? 0.4 : 0.2};
      background-color: ${({ theme }) => theme.colors.primary1};
      border: none;
      animation: scaleUp 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s forwards;
      box-shadow: ${({ theme }) =>
        theme.mode === 'dark' ? '0 0 25px rgba(253, 155, 160, 0.4)' : 'none'};
    }
  }

  @media screen and (max-width: 1024px) {
    .main-cursor,
    .secondary-cursor {
      display: none;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1.5);
    }

    to {
      transform: scale(1);
    }
  }
`;
