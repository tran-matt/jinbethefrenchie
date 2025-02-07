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
        <div className="prose prose-gray">
          <p className="text-gray-700">
            French Bulldogs are known for their charming personalities—but they
            also have specific needs. Here are ten essential tips to help you
            become the best Frenchie owner:
          </p>
          <ol className="list-decimal list-inside text-gray-700">
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
          <p className="text-gray-700">
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
        <div className="prose prose-gray">
          <p className="text-gray-700">
            A well-planned diet is crucial for your French Bulldog’s overall
            well-being. This guide covers everything from selecting quality
            ingredients to establishing proper portion sizes.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Consult your veterinarian for personalized dietary advice.</li>
            <li>Avoid fillers and artificial additives in commercial foods.</li>
            <li>Focus on lean proteins, fresh vegetables, and healthy fats.</li>
            <li>Consider offering small, frequent meals throughout the day.</li>
            <li>Ensure your Frenchie always has access to fresh, clean water.</li>
          </ul>
          <p className="text-gray-700">
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
        <div className="prose prose-gray">
          <p className="text-gray-700">
            Grooming your French Bulldog is not just about looking good—it’s a key
            part of maintaining their overall health. This comprehensive guide
            walks you through daily, weekly, and monthly grooming routines.
          </p>
          <h4 className="text-gray-800 font-semibold">Daily Care</h4>
          <p className="text-gray-700">
            Brush your Frenchie daily to remove loose hair and distribute natural oils.
          </p>
          <h4 className="text-gray-800 font-semibold">Weekly Routine</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Clean their ears and check for signs of infection.</li>
            <li>Trim nails as needed or schedule a professional grooming session.</li>
          </ul>
          <h4 className="text-gray-800 font-semibold">Monthly Maintenance</h4>
          <p className="text-gray-700">
            Bathe your Frenchie with a gentle shampoo and ensure they are dried thoroughly to prevent skin issues.
          </p>
        </div>
      ),
    };
  } else {
    blogPost = {
      title: "Blog Post Not Found",
      date: "",
      content: (
        <p className="text-gray-700">
          We couldn't find the blog post you're looking for.
        </p>
      ),
    };
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          {blogPost.title}
        </h1>
        {blogPost.date && (
          <p className="text-gray-500 text-center text-sm mb-6">
            Published on {blogPost.date}
          </p>
        )}
        <div className="text-gray-700 leading-relaxed">{blogPost.content}</div>
      </div>
    </div>
  );
};

export default BlogPost;
