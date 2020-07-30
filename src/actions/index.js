export const currentUser = (obj) => (
    {
    type: 'UPDATE_CURRENT_USER',
    payload: obj
    }
)

export const userRef = (obj) => (
    {
    type: 'UPDATE_USER_REF',
    payload: obj
    }
)

export const projectname = (name) => (
    {
    type: 'UPDATE_PROJECT_NAME',
    projectname: name
    }
)


export const toggledisplay = (panel) => (
    {
        type: 'TOGGLE_DISPLAY',
        panel: panel
    }
)

export const filename = (panel, name) => (
    {
        type: 'UPDATE_FILENAME',
        panel: panel,
        filename: name
    }
)

export const content = (panel, text) => (
    {
        type: 'UPDATE_CONTENT',
        panel: panel,
        content: text
    }
)

export const selectProject = (projectname, content) => (
    {
        type: 'SELECT_PROJECT',
        projectname: projectname,
        content: content
    }
)
