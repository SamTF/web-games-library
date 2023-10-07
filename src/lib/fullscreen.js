// Makes the browser go into fullscreen focused on a given element

const noop = () => {}

export const requestFullscreen = (element) => {
    const requestFS = (
        element.requestFullscreen ||
        element.mozRequestFullScreen ||
        element.webkitRequestFullscreen ||
        element.msRequestFullscreen ||
        noop
    ).bind(element);
    
    requestFS();
};