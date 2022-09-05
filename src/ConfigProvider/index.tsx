import React, { createContext, ReactNode } from 'react';

interface Config {
    prefix?: string
}

const defaultConfig: Config = {
    prefix: 'heima-ui'
}

//  定义一个全局上下文
export const ConfigContext = createContext(defaultConfig)


// 以下是提供给组件 包裹用的。 

// interface ConfigProviderProps extends Config {
//     Children?: ReactNode
// }

// function ConfigProvider(props: ConfigProviderProps) {
//     const { prefix, Children } = props

//     return (
//         <ConfigContext.Provider value={{ prefix }}>
//             {Children}
//         </ConfigContext.Provider>
//     );
// }

// export default ConfigProvider;
