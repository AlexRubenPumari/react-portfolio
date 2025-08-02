import { useState, useEffect } from 'react'
import { getRepositories } from '../services/repositories'

export function useRepositories() {
  // const [repositories, setRepositories] = useState([])
  const [repositories, setRepositories] = useState(repos)
  // useEffect(() => {
  //   getRepositories()
  //     .then(repositories => {
  //       console.log(repositories)
  //       setRepositories(repositories)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       setRepositories([])
  //     })
  // }, [])
  return { repositories }
}

const repos = [
    {
        "id": 1005605908,
        "fullName": "AlexRubenPumari/app-to-do-list",
        "githubUrl": "https://github.com/AlexRubenPumari/app-to-do-list",
        "pageUrl": "https://app-to-do-list-theta.vercel.app",
        "description": "Aplicación web para gestionar tareas desarrollada con React, Tailwind CSS, y Express.js. Implementa un sistema CRUD completo (Crear, Leer, Actualizar, Eliminar) para tareas, a través de una API RESTful.",
        "title": "📋 Organizador de tareas",
        "badges": [
            {
                "technology": "React",
                "url": "https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react"
            },
            {
                "technology": "Tailwind CSS",
                "url": "https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css"
            },
            {
                "technology": "Express",
                "url": "https://img.shields.io/badge/Express-5.1.0-green?style=for-the-badge&logo=express"
            },
            {
                "technology": "Vite",
                "url": "https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white"
            }
        ],
        "imagePath": "readme/img1.jpg",
        "videoUrl": "https://youtu.be/IfuqzD6UAe8",
        "learnings": [
            "Basicos de Node.js: Me familiaricé con su entorno y cómo empezar a usarlo.",
            "Conceptos básicos de Backend: Entendí qué es el backend y cómo se organiza un proyecto desde cero.",
            "Express.js: Di mis primeros pasos creando rutas y servidores simples.",
            "APIs: Aprendí a crear mi primera API y manejar distintos tipos de peticiones.",
            "Tailwind CSS: Empecé a estilar interfaces usando clases utilitarias de Tailwind."
        ]
    },
    {
        "id": 998410953,
        "fullName": "AlexRubenPumari/react-movie-api",
        "githubUrl": "https://github.com/AlexRubenPumari/react-movie-api",
        "pageUrl": "https://alexrubenpumari.github.io/react-movie-api/",
        "description": "Aplicación React que consume la API de TheMovieDB, con efectos de partículas de particles.js y optimización de peticiones con just-debounce-it. Estilizada con SCSS/Sass e incluye modo oscuro.",
        "title": "📋 React Movie API App",
        "badges": [
            {
                "technology": "React",
                "url": "https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react"
            },
            {
                "technology": "Sass",
                "url": "https://img.shields.io/badge/Sass-1.89.2-cc6699?style=for-the-badge&logo=sass&logoColor=white"
            }
        ],
        "imagePath": null,
        "videoUrl": null,
        "learnings": []
    },
    {
        "id": 1002203198,
        "fullName": "AlexRubenPumari/react-product-calculator",
        "githubUrl": "https://github.com/AlexRubenPumari/react-product-calculator",
        "pageUrl": "https://alexrubenpumari.github.io/react-product-calculator/",
        "description": "Aplicación web construida con React y estilizada con Tailwind CSS para gestionar productos. Incluye funcionalidades CRUD, cálculo automático de precios totales y almacenamiento local mediante IndexedDB.",
        "title": "📋 Calculador de Productos",
        "badges": [
            {
                "technology": "React",
                "url": "https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react"
            },
            {
                "technology": "TailwindCSS",
                "url": "https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
            },
            {
                "technology": "Vite",
                "url": "https://img.shields.io/badge/Vite-6.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white"
            }
        ],
        "imagePath": "readme/img1.jpg",
        "videoUrl": "https://youtu.be/HG6uilpRuG4",
        "learnings": [
            "IndexedDB: Entendí cómo usar su API nativa y a manejar correctamente transacciones asincrónicas sin errores sutiles.",
            "Event Loop: Entender su flujo fue clave para resolver un problema con el manejo de las transacciones asíncronas en IndexedDB.",
            "Componentes UI: Construirlos a mano con Tailwind está bueno pero lleva tiempo. Estoy considerando usar UI kits como React Bootstrap.",
            "Manejo de estado: `useState` puede volverse complejo en apps medianas. Herramientas como Zustand podrían simplificarlo.",
            "TypeScript: Necesito implementarlo para mejorar el tipado, evitar errores silenciosos y facilitar el mantenimiento en proyectos más grandes."
        ]
    }
]