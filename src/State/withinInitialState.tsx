import { useState, useEffect, ComponentType } from "react";
import { AppState } from "./appStateReducer";
import { load } from "../api/api";

type InjectedProps = {
  initalState: AppState;
};

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<Tprops>(
  WrappedComponent: ComponentType<PropsWithoutInjected<Tprops> & InjectedProps>
) {
  return (props: PropsWithoutInjected<Tprops>) => {
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: null,
    });

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load();
          setInitialState(data);
        } catch (e) {
          setError(e);
        }
        setIsLoading(false);
      };
      fetchInitialState();
    }, []);

    if (isLoading) {
      return <div>Loading</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return <WrappedComponent {...props} initalState={initialState} />;
  };
}
