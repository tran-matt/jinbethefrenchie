import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  let blogPost;

  if (id === "1") {
    blogPost = {
      title: "10 Essential Tips for Frenchie Owners",
      date: "March 10, 2025",
      content: (
        <div>
          <p className="mb-4">
            French Bulldogs are known for their charming personalities—but they
            also have specific needs. Here are ten essential tips to help you
            become the best Frenchie owner:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Schedule regular vet check-ups.</li>
            <li>Maintain a balanced diet rich in high-quality proteins.</li>
            <li>Ensure daily exercise to keep your Frenchie active.</li>
            <li>Establish a consistent grooming routine.</li>
            <li>Monitor their breathing, as Frenchies can have respiratory challenges.</li>
            <li>Provide mental stimulation with interactive toys.</li>
            <li>Socialize your Frenchie early for a well-rounded personality.</li>
            <li>Implement positive reinforcement training techniques.</li>
            <li>Create a comfortable, safe space at home.</li>
            <li>Show plenty of love and affection!</li>
          </ol>
          <p>
            Following these tips will help ensure your Frenchie leads a happy,
            healthy life.
          </p>
        </div>
      ),
    };
  } else if (id === "2") {
    blogPost = {
      title: "Creating the Perfect Diet for Your Frenchie",
      date: "February 25, 2025",
      content: (
        <div>
          <p className="mb-4">
            A well-planned diet is crucial for your French Bulldog’s overall
            well-being. This guide covers everything from selecting quality
            ingredients to establishing proper portion sizes.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Consult your veterinarian for personalized dietary advice.</li>
            <li>Avoid fillers and artificial additives in commercial foods.</li>
            <li>Focus on lean proteins, fresh vegetables, and healthy fats.</li>
            <li>Consider offering small, frequent meals throughout the day.</li>
            <li>Ensure your Frenchie always has access to fresh, clean water.</li>
          </ul>
          <p>
            Experiment with different foods while keeping track of your Frenchie’s
            reactions to create the perfect meal plan.
          </p>
        </div>
      ),
    };
  } else if (id === "3") {
    blogPost = {
      title: "Grooming and Care: A Comprehensive Guide",
      date: "February 15, 2025",
      content: (
        <div>
          <p className="mb-4">
            Grooming your French Bulldog is not just about looking good—it’s a key
            part of maintaining their overall health. This comprehensive guide
            walks you through daily, weekly, and monthly grooming routines.
          </p>
          <h4 className="font-semibold mb-2">Daily Care</h4>
          <p className="mb-4">
            Brush your Frenchie daily to remove loose hair and distribute natural oils.
          </p>
          <h4 className="font-semibold mb-2">Weekly Routine</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Clean their ears and check for signs of infection.</li>
            <li>Trim nails as needed or schedule a professional grooming session.</li>
          </ul>
          <h4 className="font-semibold mb-2">Monthly Maintenance</h4>
          <p>
            Bathe your Frenchie with a gentle shampoo and ensure they are dried thoroughly to prevent skin issues.
          </p>
        </div>
      ),
    };
  } else {
    blogPost = {
      title: "Blog Post Not Found",
      date: "",
      content: "We couldn't find the blog post you're looking for.",
    };
  }

  return (
    <div className="container mx-auto p-8 bg-amber-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-stone-800">{blogPost.title}</h1>
      <p className="text-stone-600 text-sm mb-4">{blogPost.date}</p>
      <div className="text-stone-700 leading-relaxed">{blogPost.content}</div>
    </div>
  );
};

export default BlogPost;
