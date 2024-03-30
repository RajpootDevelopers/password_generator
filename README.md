# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

deployment on surge some comands and steps

1.  npm i --global surge 
2.  going to dist or build dir
3.  surge
4.  terminate domain cmd : surge teardown yourdomain.surge.sh
5.  rename domain name : surge --domain your-faivourit.surge.sh