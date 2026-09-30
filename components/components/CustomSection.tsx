import React from "react";
import { CustomSection as CustomSectionType } from "@/lib/responseType";
import ShowSectionIcon from "./ShowSectionIcon";

export default function CustomSection({
  title,
  description,
  cards,
  index,
}: CustomSectionType & { index: number }) {
  return (
    <section
      className={`py-24 ${index % 2 === 0 ? "bg-card-background" : "bg-main-bg"}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main-color mb-6">
            {title}
          </h2>
          <div className="w-20 h-1 bg-main-color mx-auto mb-6" />

          <div
            className="text-xs prose editor-content max-w-full text-white"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Cards Grid */}
        {cards && cards.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.id} className="group">
                <div
                  className={`${index % 2 === 0 ? "bg-second-bg border-white/10" : "bg-main-bg "} border rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-2`}>
                  <ShowSectionIcon icon={card.icon} />

                  {/* Content */}
                  <h3
                    className={`${index % 2 === 0 ? "text-white" : "text-black"} text-xl font-bold mb-4`}>
                    {card.title}
                  </h3>
                  <p
                    className={`${index % 2 === 0 ? "text-white/90" : "text-black/90"} leading-relaxed`}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
