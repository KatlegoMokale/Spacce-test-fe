// import { type MotionValue, useTransform } from "framer-motion"

// interface IconPosition {
//   startLeft?: string
//   startRight?: string
//   startTop: string
// }

// export function useIconAnimation(
//   scrollYProgress: MotionValue<number>,
//   positions: IconPosition[],
//   scrollRange: [number, number] = [0, 1], // Changed to [0, 1]
// ) {
//   const transforms = positions.map((position) => {
//     const startX = position.startLeft
//       ? Number.parseInt(position.startLeft)
//       : position.startRight
//       ? 100 - Number.parseInt(position.startRight)
//       : 0; // Default to 0 if neither left nor right is provided
//     const startY = Number.parseInt(position.startTop)

//     return { startX, startY }
//   })

//   const xValues = transforms.map((transform) => `${transform.startX}vw`)
//   const yValues = transforms.map((transform) => `${transform.startY}vh`)
//   const opacityValues = transforms.map((_) => 1)

//   const xTransforms = useTransform(
//     scrollYProgress,
//     scrollRange,
//     xValues.map((x) => x),
//     xValues.map((_) => "50%"),
//   )
//   const yTransforms = useTransform(
//     scrollYProgress,
//     scrollRange,
//     yValues.map((y) => y),
//     yValues.map((_) => "50%"),
//   )
//   const opacityTransforms = useTransform(
//     scrollYProgress,
//     scrollRange,
//     opacityValues,
//     opacityValues.map((_) => 0),
//   )

//   return positions.map((_, index) => ({
//     x: xTransforms[index],
//     y: yTransforms[index],
//     opacity: opacityTransforms[index],
//   }))
// }

