import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import MoviesPage from "./page/MoviePage/MoviesPage";
import SelectMovie from "./components/MovieContainer/SelectMovie/SelectMovie";
import GenresPage from "./page/GenresPage/GenresPage";
import GenreMoviesPage from "./page/GenresPage/GenreMoviesPage";
import SearchMoviesPage from "./page/SearchMoviesPage/SearchMoviesPage";

const router = createBrowserRouter([
    {path:'', element: <MainLayout/>, children:[
            {index:true, element: <Navigate to={'movies'}/>},
            {path:'movies', element: <MoviesPage/>},
            {path:'movies/:id', element: <SelectMovie/>},
            {path:'genres', element: <GenresPage/>},
            {path:'genres/:id', element: <GenreMoviesPage/>},
            {path:'movies/search/:tag',element: <SearchMoviesPage/>}
        ]}
])

export {router}