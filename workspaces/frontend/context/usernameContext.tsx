import { ReactNode, createContext, useEffect, useState } from "react";

type UsernameContextType = {
    username?: string;
    setUsername: (username: string) => void;
}

export const UsernameContext = createContext<UsernameContextType>({
    setUsername: _ => void(0),
});

type Props = {
    children: ReactNode;
}

export const UsernameProvider = ({children}: Props) => {
    const [username, setUsername] = useState<string>();

    return <UsernameContext.Provider value={{username, setUsername}}>
      {children}
    </UsernameContext.Provider>;
}