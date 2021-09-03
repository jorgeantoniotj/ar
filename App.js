import React from 'react';
import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroSkyBox,
  Viro360Image,
  ViroOrbitCamera,
  ViroDirectionalLight,
  ViroAmbientLight,
  ViroNode,
  ViroMaterials,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import { styles } from './styles'

const Scene = () => {

  const renderText = () => {
    return (
      <ViroARScene>
        <ViroText
          text="ViroText"
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.text}
        />
      </ViroARScene>
    );
  };

  const renderImage = () => {
    return (
      <ViroARScene>
         <Viro360Image source={require('./assets/guadalupe_360.jpeg')} />
      </ViroARScene>
    );
  };

  const renderObject = () => {
    return (
      <ViroARScene>
        {/*<ViroSkyBox
          source={{
            nx: require('./assets/grid_bg.jpeg'),
            px: require('./assets/grid_bg.jpeg'),
            ny: require('./assets/grid_bg.jpeg'),
            py: require('./assets/grid_bg.jpeg'),
            nz: require('./assets/grid_bg.jpeg'),
            pz: require('./assets/grid_bg.jpeg'),
          }}
        />*/}
        <ViroOrbitCamera
          position={[0, 0, -0]}
          active={true}
          focalPoint={[0, 0, -1]}
        />
        <ViroDirectionalLight direction={[0, 0, -1]} color="#ffffff" />
        <ViroAmbientLight color="#aaaaaa" />
        <ViroNode position={[0, 0, -1]}>
          <Viro3DObject
            source={require('./assets/heart.obj')}
            materials={['heart']}
            type="OBJ"
          />
        </ViroNode>
        {/*<ViroText
          text="Heart"
          position={[0.0, 0.0, -3]}
          style={styles.text2}
          transformBehaviors={['billboardY']}
        />*/}
      </ViroARScene>
    );
  };

  return renderImage();
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: Scene,
      }}
      style={styles.container}
    />
  );
};

var materials = ViroMaterials.createMaterials({
  heart: {
    lightingModel: "Blinn",
    diffuseTexture: require("./assets/Heart_D3.jpeg"),
    specularTexture: require("./assets/Heart_S2.jpeg"),
    writesToDepthBuffer: true,
    readsFromDepthBuffer: true,
  },
});