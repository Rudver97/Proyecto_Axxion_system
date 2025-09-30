import { NavLink } from "react-router-dom"

export const nav=() =>{
    const sections = [
        {name: 'Login', route: '/login'},
        {name: 'Usuarios', route: '/login'},
        {name: 'Roles', route: '/login'},
        {name: 'Clientes', route: '/login'},
        {name: 'Proveedores', route: '/login'},
        {name: 'Productos', route: '/login'},
        {name: 'Categorias', route: '/login'},
        {name: 'Subcategorias', route: '/login'},
    ]

    return (
        <aside className="flex">
            <nav>
                <ul>
                    {sections.map((section) => (
                        <NavLink
                        to={section.route}>
                            <p>{section.name}</p>
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}