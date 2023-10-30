import React, { RefObject } from "react";
import { useInView } from "react-intersection-observer";

export interface WithIntersectionObserverProps {
    sectionClassName?: string;
    sectionRef?: RefObject<HTMLElement>;
}

const WithIntersectionObserver = <P extends WithIntersectionObserverProps>(
    WrappedComponent: React.ComponentType<P>
) => {
    return function WithIntersectionObserver(props: P) {
        const { ref, inView } = useInView();
        const sectionClassName = `portfolio-section ${inView ? "visible" : ""}`;
        const mergedProps = {
            ...props,
            sectionRef: ref,
            sectionClassName,
        };

        return <WrappedComponent {...mergedProps} />;
    };
};

export default WithIntersectionObserver;
