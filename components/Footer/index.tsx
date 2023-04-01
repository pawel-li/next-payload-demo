import { SectionContainer } from "../SectionContainer"

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="shadow-[inset_0_1px_0_rgba(25,25,60,0.08)] py-4 text-black dark:text-white md:py-6">
      <SectionContainer>
        <div className="flex justify-center">
          <span className="d-block text-sm text-center m-auto">Copyright © LL All Rights Reserved</span>
        </div>
      </SectionContainer>
    </footer>
  )
}