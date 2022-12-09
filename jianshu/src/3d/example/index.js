import React, { Component } from "react";
import {
    PerspectiveCamera,
    Scene,
    Color,
    WebGLRenderer,
    HemisphereLight,
    Vector3
} from 'three';
import { PCDLoader } from "../../3d/loader/PCDLoader";

class PointCloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleObj: {
                position: 'absolute',
                top: "10px",
                left: "10px",
                width: "1500px",
                height: "1000px",
                border: "1px solid white",
                backgroundColor: "#000"
            }
        }
        this.init = this.init.bind(this);
    }


    PCDViewer(pcdPath, elementID_PCD) {
        var elem = document.getElementById(elementID_PCD)
        var camera = new PerspectiveCamera(70, elem.clientWidth/elem.clientHeight, 0.1, 50000);
        var renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(new Color(0x000000))
        renderer.setSize(elem.clientWidth, elem.clientHeight);
        elem.appendChild(renderer.domElement);
                
        var scene = new Scene();
        scene.add(new HemisphereLight(0xffffff, 1.5));
                
        var loader = new PCDLoader();
        loader.load(pcdPath, function ( points ) {
            points.material.size = 0.5;
            scene.add( points );
    
            var middle = new Vector3();
            points.geometry.computeBoundingBox();
            points.geometry.boundingBox.getCenter(middle);
            console.log(middle)
            // points.applyMatrix(new Matrix4().makeTranslation(-middle.x, -middle.y, -middle.z ));
                
            var largestDimension = Math.max(points.geometry.boundingBox.max.x,
                    points.geometry.boundingBox.max.y, 
                    points.geometry.boundingBox.max.z);
            camera.position.z = largestDimension * 1.2;
                    
            var animate = function () {
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }; 
                    
            animate();
        });
    }

    init() {
        this.PCDViewer('/pcd/lidar/473625000.pcd', 'container');
    }

    componentDidMount() {
        setTimeout(()=>{
            this.init();
        }, 3000);
    }

    render() {
        const { styleObj } = this.state;
        return (
            <div>
                <div id="container" style={ styleObj }></div>
            </div>
        );
    }
}

export default PointCloud;