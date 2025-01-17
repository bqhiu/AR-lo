<!DOCTYPE html>
<html>
<head>
    <title>AR.js Example with .obj Model</title>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.7.7/aframe/build/aframe-ar.js"></script>
</head>
<body style='margin: 0; overflow: hidden;'>
    <a-scene embedded arjs>
        <a-marker preset="hiro">
            <a-entity obj-model="obj: url(CHAIR.obj)" scale="0.5 0.5 0.5" position="0 0 0"></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
    </a-scene>
</body>
</html>
