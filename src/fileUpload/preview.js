import React from 'react'
import FilePreviewer from 'react-file-previewer'
import HoverVideoPlayer from 'react-hover-video-player'

export default (props) => {
  const { data } = props

  const isLocal = data.file
  const url = isLocal
    ? URL.createObjectURL(data.file)
    : data.url

  const _mimeType = () => {
    if (data.mimeType) {
      return data.mimeType
    }

    if (isLocal && data.file) {
      return data.file.type
    }

    return null
  }

  const render = () => {
    const mimeType = _mimeType()
    const isVideo = mimeType && mimeType.indexOf('video/') === 0
    if (isVideo) {
      return <HoverVideoPlayer
        videoSrc={url}
        pausedOverlay={
          <img
            // src={data.thumbnailUrl}
            alt=""
            style={{
              // Make the image expand to cover the video's dimensions
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    }

    return <FilePreviewer
      hideControls
      // size={size * 4}
      // badge={false}
      file={{ url }}
    />
  }
  return <div className='
      w-full 
      h-full 
      items-center 
      flex 
      justify-center  
      transform
      group-hover:scale-[1.005]
      transition-all
        duration-200
        ease-in-out
      '>

    {render()}
  </div>
}